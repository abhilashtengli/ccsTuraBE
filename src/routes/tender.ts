import express, { Request, Response } from "express";
import authRouter from "./auth";
import { tenderValidation } from "../utils/validation";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
const tenderRouter = express.Router();

tenderRouter.post(
  "/add-tender",
  authRouter,
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

tenderRouter.get("/getAll", async (req: Request, res: Response) => {
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
  } catch (err) {
    res.status(500).json({
      message: "Could not fetch the tender, please try again later"
    });
    return;
  }
});

tenderRouter.delete(
  "/delete-tender/:id",
  authRouter,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      if (!id) {
        res.status(400).json({ message: "Tender Id is required" });
        return;
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
