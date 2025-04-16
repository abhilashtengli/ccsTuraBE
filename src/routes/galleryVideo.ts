import express, { Request, Response } from "express";
import authRouter from "./auth";
import { videoValidation } from "../utils/validation";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
import { deleteContent } from "../services/Cloudflare/cloudflare";
const videoRouter = express.Router();

videoRouter.post(
  "/add-video",
  authRouter,
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const result = videoValidation.safeParse(body);

      if (!result.success) {
        res.json({
          message: "Invalid Input",
          error: result.error.errors
        });
        return;
      }
      const { category, title, youtubeUrl, youtubeKey } = result.data;

      const video = await prisma.galleryVideo.create({
        data: {
          category: category,
          title: title,
          youtubeUrl: youtubeUrl,
          youtubeKey: youtubeKey
        }
      });
      res.status(201).json({
        message: "success",
        data: video
      });
      return;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(400).json({
          code: "DATABASE_ERROR",
          message: "Failed to add video due to database constraints"
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

videoRouter.get("/getAll", async (req: Request, res: Response) => {
  try {
    const videos = await prisma.galleryVideo.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    if (!videos) {
      res.status(404).json({
        message: "No videos Found"
      });
      return;
    }
    res.status(200).json({
      message: "success",
      data: videos
    });
  } catch (err) {
    res.status(500).json({
      message: "Could not fetch the videos, please try again later"
    });
    return;
  }
});

videoRouter.delete(
  "/delete-video/:id",
  authRouter,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      if (!id) {
        res.status(400).json({ message: "Video Id is required" });
        return;
      }
      const video = await prisma.galleryVideo.findUnique({
        where: { id: id },
        select: { youtubeKey: true, youtubeUrl: true, category: true }
      });
      if (!video) {
        res.status(404).json({
          message: "Video not found"
        });
        return;
      }
      const deletionResult = await deleteContent(video.youtubeKey);
      if (!deletionResult?.success) {
        console.warn(
          `Video deletion failed for ${video.youtubeKey}:`,
          deletionResult.error
        );
      }
      await prisma.galleryVideo.delete({
        where: { id: id }
      });
      res.status(200).json({
        message: "Video deleted successfully"
      });
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          res.status(404).json({
            message: "Video not found" // Fixed message consistency
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
