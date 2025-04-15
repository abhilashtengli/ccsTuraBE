import express, { Request, Response } from "express";
import authRouter from "./auth";
import { staffFormValidation } from "../utils/validation";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
const staffFormRouter = express.Router();

staffFormRouter.post(
  "/add-staff-form",
  authRouter,
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const result = staffFormValidation.safeParse(body);

      if (!result.success) {
        res.json({
          message: "Invalid Input",
          error: result.error.errors
        });
        return;
      }
      const { title, formType, updatedDate, pdfUrl, pdfKey, isActive } =
        result.data;

      const staffForm = await prisma.staffForm.create({
        data: {
          title: title,
          formType: formType,
          updatedDate: updatedDate,
          pdfUrl: pdfUrl,
          pdfKey: pdfKey,
          isActive: isActive
        }
      });
      res.status(201).json({
        message: "success",
        data: staffForm
      });
      return;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(400).json({
          code: "DATABASE_ERROR",
          message: "Failed to create Staff form due to database constraints"
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

staffFormRouter.get("/getAll", async (req: Request, res: Response) => {
  try {
    const staffForm = await prisma.staffForm.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    if (!staffForm) {
      res.status(404).json({
        message: "No Staff form Found"
      });
      return;
    }
  } catch (err) {
    res.status(500).json({
      message: "Could not fetch the Staff forms, please try again later"
    });
    return;
  }
});

staffFormRouter.delete(
  "/delete-staff-form/:id",
  authRouter,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      if (!id) {
        res.status(400).json({ message: "Staff form Id is required" });
        return;
      }
      await prisma.staffForm.delete({
        where: { id: id }
      });
      res.status(200).json({
        message: "Staff form deleted successfully"
      });
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          res.status(404).json({
            message: "Staff form not found" // Fixed message consistency
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
