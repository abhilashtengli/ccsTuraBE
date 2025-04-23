import express, { Request, Response } from "express";
import { tenderUpdateValidation, tenderValidation } from "../utils/validation";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
import { deleteContent } from "../services/Cloudflare/cloudflare";
import { userAuth } from "../middleware/auth";
const tenderRouter = express.Router();

tenderRouter.post(
  "/add-tender",
  // userAuth,
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const result = tenderValidation.safeParse(body);

      if (!result.success) {
        res.json({
          message: "Invalid Input",
          error: result.error.errors
        });
        return;
      }
      const {
        title,
        reference,
        publishedDate,
        closingDate,
        category,
        pdfUrl,
        pdfKey,
        status
      } = result.data;

      const tender = await prisma.tender.create({
        data: {
          title: title,
          reference: reference,
          publishedDate: publishedDate,
          closingDate: closingDate,
          category: category,
          pdfUrl: pdfUrl,
          pdfKey: pdfKey,
          status: status
        }
      });
      res.status(201).json({
        message: "success",
        data: tender
      });
      return;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(400).json({
          code: "DATABASE_ERROR",
          message: "Failed to create tender due to database constraints"
        });
        return;
      }
      res.status(500).json({
        message: "Something went wrong, please try again later"
      });
      return;
    }
  }
);

tenderRouter.put(
  "/update-tender/:id",
  // userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const result = tenderUpdateValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          error: result.error.errors
        });
        return;
      }

      // Check if tender exists
      const existingTender = await prisma.tender.findUnique({
        where: { id }
      });

      if (!existingTender) {
        res.status(404).json({
          message: "Tender not found"
        });
        return;
      }

      // Update only provided fields
      const updatedTender = await prisma.tender.update({
        where: { id },
        data: {
          title: result.data.title ?? existingTender.title,
          reference: result.data.reference ?? existingTender.reference,
          publishedDate:
            result.data.publishedDate ?? existingTender.publishedDate,
          closingDate: result.data.closingDate ?? existingTender.closingDate,
          category: result.data.category ?? existingTender.category,
          pdfUrl: result.data.pdfUrl ?? existingTender.pdfUrl,
          pdfKey: result.data.pdfKey ?? existingTender.pdfKey,
          status: result.data.status ?? existingTender.status,
          updatedAt: new Date().toISOString()
        }
      });

      res.status(200).json({
        message: "success",
        data: updatedTender
      });
      return;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          res.status(404).json({
            code: "NOT_FOUND",
            message: "Tender not found"
          });
          return;
        }
        res.status(400).json({
          code: "DATABASE_ERROR",
          message: "Failed to update tender due to database constraints"
        });
        return;
      }
      res.status(500).json({
        message: "Something went wrong, please try again later"
      });
      return;
    }
  }
);

tenderRouter.get("/te/getAll", async (req: Request, res: Response) => {
  try {
    const tender = await prisma.tender.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    if (!tender) {
      res.status(404).json({
        message: "No tender Found"
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: tender
    });
  } catch (err) {
    res.status(500).json({
      message: "Could not fetch the tender, please try again later"
    });
    return;
  }
});

tenderRouter.delete(
  "/delete-tender/:id",
  // userAuth,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      if (!id) {
        res.status(400).json({ message: "Tender Id is required" });
        return;
      }
      const tender = await prisma.tender.findUnique({
        where: { id: id },
        select: { pdfKey: true, id: true, title: true, category: true }
      });
      if (!tender) {
        res.status(404).json({
          message: "Tender not found"
        });
        return;
      }

      if (tender.pdfKey !== null) {
        const deletionResult = await deleteContent(tender.pdfKey);
        if (!deletionResult?.success) {
          console.warn(
            `Tender deletion failed for ${tender.pdfKey}:`,
            deletionResult.error
          );
        }
      }
      await prisma.tender.delete({
        where: { id: id }
      });
      res.status(200).json({
        message: "Tender deleted successfully"
      });
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          res.status(404).json({
            message: "Tender not found" // Fixed message consistency
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

export default tenderRouter;
