import express, { Request, Response } from "express";
import authRouter from "./auth";
import { noticeValidation } from "../utils/validation";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
const noticeRouter = express.Router();

noticeRouter.post(
  "/add-notice",
  authRouter,
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

noticeRouter.get("/getAll", async (req: Request, res: Response) => {
  try {
    const notices = await prisma.notice.findMany();
    if (!notices) {
      throw new Error("Failed to fetch all notice");
    }
    res.status(200).json({
      message: "success",
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
  authRouter,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      if (!id) {
        res.status(404).json({
          message: "Notice Id is required"
        });
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
