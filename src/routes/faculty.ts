import express, { Request, Response } from "express";
import authRouter from "./auth";
import { facultyValidation } from "../utils/validation";
import {
  deleteContent,
  generatePresignedUrl
} from "../services/Cloudflare/cloudflare";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
const facultyRouter = express.Router();

facultyRouter.post(
  "/add-faculty",
  authRouter,
  async (req: Request, res: Response) => {
    try {
      const user = (req as Request & { user?: any }).user;
      if (!user) {
        res
          .status(401)
          .send({ message: "Please Sign In to add Faculty members" });
        return;
      }
      const body = req.body;
      const result = await facultyValidation.safeParse(body);
      if (!result.success) {
        res.json({
          message: "Invalid Input",
          error: result.error.errors
        });
        return;
      }

      const {
        firstName,
        lastName,
        email,
        contactNumber,
        profileImageUrl,
        imageKey,
        designation,
        isHod,
        facultyType,
        cvUrl,
        pdfKey,
        socialLinks,
        department
      } = result.data;

      const formattedSocialLinks =
        socialLinks && Object.keys(socialLinks).length > 0
          ? socialLinks // Only include socialLinks if it's not empty
          : undefined;

      const faculty = await prisma.facultyMember.create({
        data: {
          firstName: firstName,
          lastName: lastName !== "" ? lastName : undefined,
          email: email,
          contactNumber: contactNumber !== "" ? contactNumber : undefined,
          profileImageUrl: profileImageUrl !== "" ? profileImageUrl : undefined,
          designation: designation,
          isHod: isHod,
          facultyType: facultyType,
          cvUrl: cvUrl !== "" ? cvUrl : undefined,
          socialLinks: formattedSocialLinks,
          department,
          imageKey: imageKey,
          pdfKey: pdfKey
        }
      });

      res.status(201).send({
        message: "success",
        data: faculty
      });
      return;
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
          res.status(409).json({
            code: "CONFLICT",
            message: "Faculty member with this email already exists"
          });
        }
        return;
      }
      res
        .status(500)
        .json({ message: "Something went wrong please try again later" });
      return;
    }
  }
);

facultyRouter.get("/getAll", async (req: Request, res: Response) => {
  try {
    const facultyData = await prisma.facultyMember.findMany();
    if (!facultyData) {
      res.status(404).json({
        message: "No Faculty data Found"
      });
      return;
    }
    res.status(200).json({
      message: "success",
      data: facultyData
    });
    return;
  } catch (err) {
    res.status(500).json({
      message: "Could not fetch the Faculty data, please try again later"
    });
    return;
  }
});

facultyRouter.delete(
  "/delete-faculty/:id",
  authRouter,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      if (!id) {
        res.status(400).json({ message: "Faculty Id is required" });
        return;
      }

      const faKeys = await prisma.facultyMember.findUnique({
        where: { id: id },
        select: { imageKey: true, pdfKey: true, id: true, firstName: true }
      });

      if (!faKeys) {
        console.warn(`Faculty member with id ${id} not found.`);
        return;
      }

      await attemptDelete(faKeys.pdfKey, "PDF");
      await attemptDelete(faKeys.imageKey, "Image");

      await prisma.facultyMember.delete({
        where: { id: id }
      });

      res.status(200).json({
        message: "Faculty member deleted successfully"
      });
      return;
    } catch (err: unknown) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2025") {
          res.status(404).json({
            message: "faculty not found" // Fixed message consistency
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

export default facultyRouter;

const attemptDelete = async (key: string | null, label: string) => {
  if (key) {
    const deletionResult = await deleteContent(key);
    if (!deletionResult?.success) {
      console.warn(
        `${label} deletion failed for ${key}:`,
        deletionResult.error
      );
    }
  } else {
    console.info(`No ${label} key provided`);
  }
};
