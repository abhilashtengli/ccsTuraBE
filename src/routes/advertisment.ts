import express, { Request, Response } from "express";
import authRouter from "./auth";
import { advertismentValidation } from "../utils/validation";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
const advertismentRouter = express.Router();

advertismentRouter.post(
  "/add-advertisment",
  authRouter,
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const result = advertismentValidation.safeParse(body);

      if (!result.success) {
        res.json({
          message: "Invalid Input",
          error: result.error.errors
        });
        return;
      }
      const { title, description, department, isActive, deadlineDate, pdfUrl } =
        result.data;

      const advertisement = await prisma.advertisement.create({
        data: {
          title: title,
          deadlineDate: deadlineDate,
          description: description,
          department: department,
          isActive: isActive,
          pdfUrl: pdfUrl
        }
      });
      res.status(201).json({
        message: "success",
        data: advertisement
      });
      return;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(400).json({
          code: "DATABASE_ERROR",
          message: "Failed to create advertisement due to database constraints"
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

advertismentRouter.get("/getAll", async (req: Request, res: Response) => {
  try {
    const advertisement = await prisma.advertisement.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    if (!advertisement) {
      res.status(404).json({
        message: "No advertisement Found"
      });
      return;
    }
  } catch (err) {
    res.status(500).json({
      message: "Could not fetch the advertisement, please try again later"
    });
    return;
  }
});

advertismentRouter.delete(
  "/delete-advertisement/:id",
  authRouter,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      if (!id) {
        res.status(400).json({ message: "Advertisement Id is required" });
        return;
      }
      await prisma.advertisement.delete({
        where: { id: id }
      });
      res.status(200).json({
        message: "Advertisement deleted successfully"
      });
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          res.status(404).json({
            message: "Advertisement not found" // Fixed message consistency
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
