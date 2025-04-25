import express, { Request, Response } from "express";
import {
  advertismentUpdateValidation,
  advertismentValidation,
} from "../utils/validation";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
import { deleteContent } from "../services/Cloudflare/cloudflare";
import { userAuth } from "../middleware/auth";
const advertismentRouter = express.Router();
interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
  } | null;
}

advertismentRouter.post(
  "/add-advertisment",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const user = (req as RequestWithUser).user;
      //   console.log("User in ad : ", user);
      const body = req.body;
      const result = advertismentValidation.safeParse(body);

      if (!result.success) {
        res.json({
          message: "Invalid Input",
          error: result.error.errors,
        });
        return;
      }
      const {
        title,
        description,
        department,
        isActive,
        deadlineDate,
        pdfUrl,
        pdfKey,
      } = result.data;

      //   console.log("Result data : ", result.data);

      const advertisement = await prisma.advertisement.create({
        data: {
          title: title,
          deadlineDate: deadlineDate,
          description: description,
          department: department,
          isActive: isActive,
          pdfUrl: pdfUrl,
          pdfKey: pdfKey,
        },
      });
      // console.log("Ad : ", advertisement);
      res.status(201).json({
        message: "success",
        data: advertisement,
      });
      return;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(400).json({
          code: "DATABASE_ERROR",
          message: "Failed to create advertisement due to database constraints",
        });
        return;
      }
      res.status(500).json({
        message: "Something went wrong, please try again later : ",
        err,
      });
      return;
    }
  }
);

advertismentRouter.put(
  "/update-advertisment/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const result = advertismentUpdateValidation.safeParse(body);

      if (!result.success) {
        res.status(400).json({
          message: "Invalid Input",
          error: result.error.errors,
        });
        return;
      }

      // Check if advertisement exists
      const existingAd = await prisma.advertisement.findUnique({
        where: { id },
      });

      if (!existingAd) {
        res.status(404).json({
          message: "Advertisement not found",
        });
        return;
      }

      const updatedAdvertisement = await prisma.advertisement.update({
        where: { id },
        data: {
          title: result.data.title ?? existingAd.title,
          description: result.data.description ?? existingAd.description,
          department: result.data.department ?? existingAd.department,
          isActive: result.data.isActive ?? existingAd.isActive,
          deadlineDate: result.data.deadlineDate ?? existingAd.deadlineDate,
          pdfUrl: result.data.pdfUrl ?? existingAd.pdfUrl,
          pdfKey: result.data.pdfKey ?? existingAd.pdfKey,
          updatedAt: new Date().toISOString(),
        },
      });

      res.status(200).json({
        message: "success",
        data: updatedAdvertisement,
      });
      return;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          res.status(404).json({
            code: "NOT_FOUND",
            message: "Advertisement not found",
          });
        } else {
          res.status(400).json({
            code: "DATABASE_ERROR",
            message:
              "Failed to update advertisement due to database constraints",
          });
        }
        return;
      }
      res.status(500).json({
        message: "Something went wrong, please try again later",
      });
      return;
    }
  }
);

advertismentRouter.get("/ad/getAll", async (req: Request, res: Response) => {
  try {
    const advertisement = await prisma.advertisement.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    if (!advertisement) {
      res.status(404).json({
        message: "No advertisement Found",
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: advertisement,
    });
    return;
  } catch (err) {
    res.status(500).json({
      message: "Could not fetch the advertisements, please try again later",
    });
    return;
  }
});

advertismentRouter.delete(
  "/delete-advertisement/:id",
  userAuth,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      if (!id) {
        res.status(400).json({ message: "Advertisement Id is required" });
        return;
      }
      const ad = await prisma.advertisement.findUnique({
        where: { id: id },
        select: { pdfKey: true, id: true, title: true },
      });
      if (!ad) {
        res.status(404).json({
          message: "Advertisment not found",
        });
        return;
      }

      if (ad.pdfKey !== null) {
        const deletionResult = await deleteContent(ad.pdfKey);
        if (!deletionResult?.success) {
          console.warn(
            `AD deletion failed for ${ad.pdfKey}:`,
            deletionResult.error
          );
        }
      }

      await prisma.advertisement.delete({
        where: { id: id },
      });
      res.status(200).json({
        message: "Advertisement deleted successfully",
      });
      return;
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        res.status(404).json({
          message: "Image record not found",
        });
        return;
      }
      res.status(500).json({
        message: err instanceof Error ? err.message : "Deletion failed",
      });
      return;
    }
  }
);

export default advertismentRouter;
