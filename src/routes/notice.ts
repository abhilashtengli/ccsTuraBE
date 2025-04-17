import express, { Request, Response } from "express";
import { noticeUpdateValidation, noticeValidation } from "../utils/validation";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
import { deleteContent } from "../services/Cloudflare/cloudflare";
import { userAuth } from "../middleware/auth";
const noticeRouter = express.Router();

noticeRouter.post(
  "/add-notice",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const result = await noticeValidation.safeParse(body);

      if (!result.success) {
        res.json({
          message: "Invalid Inputs",
          error: result.error.errors
        });
        return;
      }
      const { category, title, pdfUrl, isActive, pdfKey } = result.data;

      const notice = await prisma.notice.create({
        data: {
          category: category,
          title: title,
          pdfUrl: pdfUrl,
          isActive: isActive,
          pdfKey: pdfKey
        }
      });

      if (!notice) {
        res.status(500).json({
          message: "Failed to upload notice. Please try again."
        });
      }

      res.status(201).json({
        message: "success",
        data: notice
      });
    } catch (err) {
      res.status(500).json({
        message: "Failed to upload notice",
        error: err instanceof Error ? err.message : "Unknown error"
      });
    }
  }
);

noticeRouter.put(
  "/update-notice/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const result = noticeUpdateValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Inputs",
          error: result.error.errors
        });
        return;
      }

      // Check if notice exists
      const existingNotice = await prisma.notice.findUnique({
        where: { id }
      });

      if (!existingNotice) {
        res.status(404).json({
          message: "Notice not found"
        });
        return;
      }

      // Update only provided fields
      const updatedNotice = await prisma.notice.update({
        where: { id },
        data: {
          category: result.data.category ?? existingNotice.category,
          title: result.data.title ?? existingNotice.title,
          pdfUrl: result.data.pdfUrl ?? existingNotice.pdfUrl,
          pdfKey: result.data.pdfKey ?? existingNotice.pdfKey,
          isActive: result.data.isActive ?? existingNotice.isActive
        }
      });

      res.status(200).json({
        message: "success",
        data: updatedNotice
      });
      return;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          res.status(404).json({
            message: "Notice not found",
            code: "NOT_FOUND"
          });
          return;
        }
        res.status(400).json({
          message: "Database error",
          code: "DATABASE_ERROR",
          error: err.message
        });
        return;
      }
      res.status(500).json({
        message: "Failed to update notice",
        error: err instanceof Error ? err.message : "Unknown error"
      });
      return;
    }
  }
);

noticeRouter.get("/no/getAll", async (req: Request, res: Response) => {
  try {
    const notices = await prisma.notice.findMany();
    if (!notices) {
      throw new Error("Failed to fetch all notice");
    }
    res.status(200).json({
      success: true,
      data: notices
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch All notice",
      error: err instanceof Error ? err.message : "Unknown error"
    });
  }
});

noticeRouter.delete(
  "/delete-notice/:id",
  userAuth,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      if (!id) {
        res.status(404).json({
          message: "Notice Id is required"
        });
      }

      const notice = await prisma.notice.findUnique({
        where: { id: id },
        select: { pdfKey: true, pdfUrl: true, title: true, category: true }
      });
      if (!notice) {
        res.status(404).json({
          message: "Notice not found"
        });
        return;
      }
      if (notice.pdfKey !== null) {
        const deletionResult = await deleteContent(notice.pdfKey);
        if (!deletionResult?.success) {
          console.warn(
            `Notice deletion failed for ${notice.pdfKey}:`,
            deletionResult.error
          );
        }
      }

      await prisma.notice.delete({
        where: { id: id }
      });
      res.status(200).json({
        message: "Notice deleted successfully"
      });
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          res.status(404).json({
            message: "Notice not found" // Fixed message consistency
          });
          return;
        }

        res.status(400).json({
          message: "Database operation failed"
        });
        return;
      }
      res.status(500).json({
        message: "Something went wrong, Please try again later!"
      });
      return;
    }
  }
);

export default noticeRouter;
