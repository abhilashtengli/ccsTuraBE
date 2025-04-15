import express, { Request, Response } from "express";
import authRouter from "./auth";
import { imageValidation } from "../utils/validation";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
import { deleteContent } from "../services/Cloudflare/cloudflare";
const imageRouter = express.Router();

imageRouter.post(
  "/add-image",
  authRouter,
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const result = imageValidation.safeParse(body);

      if (!result.success) {
        res.json({
          message: "Invalid Input",
          error: result.error.errors
        });
        return;
      }
      const { category, imageUrl, imageKey } = result.data;

      const image = await prisma.galleryImage.create({
        data: {
          category: category,
          imageUrl: imageUrl,
          imageKey: imageKey
        }
      });
      res.status(201).json({
        message: "success",
        data: image
      });
      return;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(400).json({
          code: "DATABASE_ERROR",
          message: "Failed to add image due to database constraints"
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

imageRouter.get("/getAll", async (req: Request, res: Response) => {
  try {
    const images = await prisma.galleryImage.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    if (!images) {
      res.status(404).json({
        message: "No images Found"
      });
      return;
    }
    res.status(200).json({
      message: "success",
      data: images
    });
  } catch (err) {
    res.status(500).json({
      message: "Could not fetch the Images, please try again later"
    });
    return;
  }
});

imageRouter.delete(
  "/delete-image/:id",
  authRouter,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      if (!id) {
        res.status(400).json({ message: "Image Id is required" });
        return;
      }
      const image = await prisma.galleryImage.findUnique({
        where: { id: id },
        select: { imageKey: true, imageUrl: true }
      });
      if (!image) {
        res.status(404).json({
          message: "Image not found"
        });
        return;
      }
      const deletionResult = await deleteContent(image.imageKey);
      if (!deletionResult?.success) {
        console.warn(
          `Image deletion failed for ${image.imageKey}:`,
          deletionResult.error
        );
      }

      await prisma.galleryImage.delete({
        where: { id: id }
      });
      res.status(200).json({
        code: deletionResult.success ? "FULLY_DELETED" : "PARTIALLY_DELETED",
        message: deletionResult.success
          ? "Image deleted successfully"
          : "Image record removed (storage deletion failed)",
        details: deletionResult.success
          ? undefined
          : {
              storageError: deletionResult.error
            }
      });
      return;
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(404).json({
          code: "NOT_FOUND",
          message: "Image record not found"
        });
        return;
      }

      res.status(500).json({
        message: err instanceof Error ? err.message : "Deletion failed"
      });
      return;
    }
  }
);
