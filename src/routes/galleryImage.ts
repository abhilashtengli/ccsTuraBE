import express, { Request, Response } from "express";
import { imageUpdateValidation, imageValidation } from "../utils/validation";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
import { deleteContent } from "../services/Cloudflare/cloudflare";
import { userAuth } from "../middleware/auth";
const imageRouter = express.Router();

imageRouter.post(
  "/add-image",
  userAuth,
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

imageRouter.put(
  "/update-image/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const result = imageUpdateValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          error: result.error.errors
        });
        return;
      }

      // Check if image exists
      const existingImage = await prisma.galleryImage.findUnique({
        where: { id }
      });

      if (!existingImage) {
        res.status(404).json({
          message: "Image not found"
        });
        return;
      }

      // Update only provided fields
      const updatedImage = await prisma.galleryImage.update({
        where: { id },
        data: {
          imageUrl: result.data.imageUrl ?? existingImage.imageUrl,
          imageKey: result.data.imageKey ?? existingImage.imageKey,
          category: result.data.category ?? existingImage.category,
          updatedAt: new Date().toISOString()
        }
      });

      res.status(200).json({
        message: "success",
        data: updatedImage
      });
      return;
    } catch (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later"
      });
      return;
    }
  }
);

imageRouter.get("/im/getAll", async (req: Request, res: Response) => {
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
      success: true,
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
  userAuth,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      if (!id) {
        res.status(400).json({ message: "Image Id is required" });
        return;
      }
      const image = await prisma.galleryImage.findUnique({
        where: { id: id },
        select: { imageKey: true, imageUrl: true, category: true }
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

export default imageRouter;
