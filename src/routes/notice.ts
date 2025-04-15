import express, { Request, Response } from "express";
import authRouter from "./auth";
import { generatePresignedUrl } from "../services/Cloudflare/cloudflare";
import { noticeValidation } from "../utils/validation";
import { prisma } from "../lib/prisma";
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
      const { category, title, pdfUrl, isActive } = result.data;

      const notice = await prisma.notice.create({
        data: {
          category: category,
          title: title,
          pdfUrl: pdfUrl,
          isActive: isActive
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



export default noticeRouter;
