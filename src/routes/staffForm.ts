import express, { Request, Response } from "express";
import {
  staffFormUpdateValidation,
  staffFormValidation,
} from "../utils/validation";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
import { deleteContent } from "../services/Cloudflare/cloudflare";
import { userAuth } from "../middleware/auth";
const staffFormRouter = express.Router();

staffFormRouter.post(
  "/add-staff-form",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const result = staffFormValidation.safeParse(body);

      if (!result.success) {
        res.json({
          message: "Invalid Input",
          error: result.error.errors,
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
          isActive: isActive,
        },
      });
      res.status(201).json({
        message: "success",
        data: staffForm,
      });
      return;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        console.log("ERROR : ", err)
        res.status(400).json({
          code: "DATABASE_ERROR",
          message: "Failed to create Staff form due to database constraints",
          err : err
        });
        return;
      }
      res.status(500).json({
        message: "Something went wrong, please try again later",
      });
      return;
    }
  }
);

staffFormRouter.put(
  "/update-staff-form/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const result = staffFormUpdateValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          error: result.error.errors,
        });
        return;
      }

      // Check if form exists
      const existingForm = await prisma.staffForm.findUnique({
        where: { id },
      });

      if (!existingForm) {
        res.status(404).json({
          message: "Staff form not found",
        });
        return;
      }

      // Update only provided fields
      const updatedForm = await prisma.staffForm.update({
        where: { id },
        data: {
          title: result.data.title ?? existingForm.title,
          formType: result.data.formType ?? existingForm.formType,
          updatedDate: result.data.updatedDate ?? existingForm.updatedDate,
          pdfUrl: result.data.pdfUrl ?? existingForm.pdfUrl,
          pdfKey: result.data.pdfKey ?? existingForm.pdfKey,
          isActive: result.data.isActive ?? existingForm.isActive,
          updatedAt: new Date().toISOString(),
        },
      });

      res.status(200).json({
        message: "success",
        data: updatedForm,
      });
      return;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          res.status(404).json({
            code: "NOT_FOUND",
            message: "Staff form not found",
          });
          return;
        }
        res.status(400).json({
          code: "DATABASE_ERROR",
          message: "Failed to update staff form due to database constraints",
        });
        return;
      }
      res.status(500).json({
        message: "Something went wrong, please try again later",
      });
      return;
    }
  }
);

staffFormRouter.get("/st/getAll", async (req: Request, res: Response) => {
  try {
    const staffForm = await prisma.staffForm.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!staffForm) {
      res.status(404).json({
        message: "No Staff form Found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: staffForm,
    });
  } catch (err) {
    res.status(500).json({
      message: "Could not fetch the Staff forms, please try again later",
    });
    return;
  }
});

staffFormRouter.delete(
  "/delete-staff-form/:id",
  userAuth,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      if (!id) {
        res.status(400).json({ message: "Staff form Id is required" });
        return;
      }
      const staffForm = await prisma.staffForm.findUnique({
        where: { id: id },
        select: { pdfKey: true, id: true, title: true, formType: true },
      });
      if (!staffForm) {
        res.status(404).json({
          message: "Staff form not found",
        });
        return;
      }

      if (staffForm.pdfKey !== null) {
        const deletionResult = await deleteContent(staffForm.pdfKey);
        if (!deletionResult?.success) {
          console.warn(
            `Staff form deletion failed for ${staffForm.pdfKey}:`,
            deletionResult.error
          );
        }
      }
      await prisma.staffForm.delete({
        where: { id: id },
      });
      res.status(200).json({
        message: "Staff form deleted successfully",
      });
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          res.status(404).json({
            message: "Staff form not found", // Fixed message consistency
          });
          return;
        }

        res.status(400).json({
          message: "Database operation failed",
        });
        return;
      }
      res.status(500).json({
        message: "Something went wrong, Please try again later!",
      });
      return;
    }
  }
);

export default staffFormRouter;
