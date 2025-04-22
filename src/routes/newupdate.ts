import express, { Request, Response } from "express";
import { newsUpdateValidation, newsValidation } from "../utils/validation";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
import { userAuth } from "../middleware/auth";
const newsRouter = express.Router();

newsRouter.post(
  "/add-news",
  // userAuth,
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const result = newsValidation.safeParse(body);

      if (!result.success) {
        res.json({
          message: "Invalid Input",
          error: result.error.errors
        });
        return;
      }
      const { title, description, publishDate, isActive } = result.data;

      const news = await prisma.newsUpdate.create({
        data: {
          title: title,
          description: description,
          publishDate: publishDate,
          isActive: isActive
        }
      });

      res.status(201).json({
        message: "success",
        data: news
      });
      return;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(400).json({
          code: "DATABASE_ERROR",
          message: "Failed to create news article due to database constraints"
        });
        return;
      }
      res.status(500).json({
        message: "Failed to create news, Something went wrong, please try again later"
      });
      return;
    }
  }
);

newsRouter.put(
  "/update-news/:id",
  // userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const result = newsUpdateValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          error: result.error.errors
        });
        return;
      }

      // Check if news exists
      const existingNews = await prisma.newsUpdate.findUnique({
        where: { id }
      });

      if (!existingNews) {
        res.status(404).json({
          message: "News article not found"
        });
        return;
      }

      // Update only provided fields (using nullish coalescing ??)
      const updatedNews = await prisma.newsUpdate.update({
        where: { id },
        data: {
          title: result.data.title ?? existingNews.title,
          description: result.data.description ?? existingNews.description,
          publishDate: result.data.publishDate ?? existingNews.publishDate,
          isActive: result.data.isActive ?? existingNews.isActive,
          updatedAt: new Date().toISOString()
        }
      });

      res.status(200).json({
        message: "success",
        data: updatedNews
      });
      return;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          res.status(404).json({
            code: "NOT_FOUND",
            message: "News article not found"
          });
          return;
        }
        res.status(400).json({
          code: "DATABASE_ERROR",
          message: "Failed to update news due to database constraints"
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

newsRouter.get("/ne/getAll", async (req: Request, res: Response) => {
  try {
    const news = await prisma.newsUpdate.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
    if (!news) {
      res.status(404).json({
        message: "No news Found"
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: news
    });
  } catch (err) {
    res.status(500).json({
      message: "Could not fetch the News, please try again later"
    });
    return;
  }
});

newsRouter.delete(
  "/delete-news/:id",
  // userAuth,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      if (!id) {
        res.status(400).json({ message: "News Id is required" });
        return;
      }
      await prisma.newsUpdate.delete({
        where: { id: id }
      });
      res.status(200).json({
        message: "Notice deleted successfully"
      });
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          res.status(404).json({
            message: "News not found" // Fixed message consistency
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

export default newsRouter;
