import express, { Request, Response } from "express";
import {
  facultyUpdateValidation,
  facultyValidation
} from "../utils/validation";
import { deleteContent } from "../services/Cloudflare/cloudflare";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
import { userAuth } from "../middleware/auth";
const facultyRouter = express.Router();

facultyRouter.post(
  "/add-faculty",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      // console.log("Entered..");

      const body = req.body;
      console.log("Body : ", body);
      const result = await facultyValidation.safeParse(body);
      console.log("result : ", result);
      if (!result.success) {
        res.json({
          message: "Invalid Input",
          error: result.error.format()
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
        bioSummary,
        cvUrl,
        pdfKey,
        socialLinks,
        department,
        bioDataUrl,
        bioDataKey
      } = result.data;

      console.log("Data : ", result.data);

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
          bioSummary: bioSummary,
          isHod: isHod,
          facultyType: facultyType,
          cvUrl: cvUrl !== "" ? cvUrl : undefined,
          socialLinks: formattedSocialLinks,
          department,
          imageKey: imageKey,
          pdfKey: pdfKey,
          bioDataUrl: bioDataUrl,
          bioDataKey: bioDataKey
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

facultyRouter.put(
  "/update-faculty/:id",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      // const user = (req as Request & { user?: any }).user;
      // if (!user) {
      //   res
      //     .status(401)
      //     .send({ message: "Please sign in to update faculty members" });
      //   return;
      // }

      const { id } = req.params;
      const body = req.body;
      // console.log("Body : ", body);
      const result = facultyUpdateValidation.safeParse(body);

      if (!result.success) {
        console.log("Validation error:", result.error.format());

        res.status(400).json({
          message: "Invalid Input",
          error: result.error.format()
        });
        return;
      }

      // Check if faculty exists
      const existingFaculty = await prisma.facultyMember.findUnique({
        where: { id }
      });

      if (!existingFaculty) {
        res.status(404).json({ message: "Faculty member not found" });
        return;
      }

      // Format socialLinks (only include if not empty)
      const formattedSocialLinks =
        result.data.socialLinks &&
        Object.keys(result.data.socialLinks).length > 0
          ? (result.data.socialLinks as Prisma.InputJsonValue)
          : Prisma.JsonNull;

      // Update only provided fields
      const updatedFaculty = await prisma.facultyMember.update({
        where: { id },
        data: {
          firstName: result.data.firstName ?? existingFaculty.firstName,
          lastName: result.data.lastName ?? existingFaculty.lastName,
          email: result.data.email ?? existingFaculty.email,
          contactNumber:
            result.data.contactNumber ?? existingFaculty.contactNumber,
          profileImageUrl:
            result.data.profileImageUrl ?? existingFaculty.profileImageUrl,
          designation: result.data.designation ?? existingFaculty.designation,
          isHod: result.data.isHod ?? existingFaculty.isHod,
          facultyType: result.data.facultyType ?? existingFaculty.facultyType,
          cvUrl: result.data.cvUrl ?? existingFaculty.cvUrl,
          socialLinks: formattedSocialLinks ?? existingFaculty.socialLinks,
          department: result.data.department ?? existingFaculty.department,
          imageKey: result.data.imageKey ?? existingFaculty.imageKey,
          pdfKey: result.data.pdfKey ?? existingFaculty.pdfKey,
          bioSummary: result.data.bioSummary ?? existingFaculty.bioSummary,
          updatedAt: new Date().toISOString(),
          bioDataUrl: result.data.bioDataUrl,
          bioDataKey: result.data.bioDataKey
        }
      });

      res.status(200).json({
        message: "success",
        data: updatedFaculty
      });
      return;
    } catch (err) {
      res.status(500).json({
        message:
          "Failed to update : Something went wrong, please try again later",
        err
      });
      return;
    }
  }
);

facultyRouter.get("/fa/getAll", async (req: Request, res: Response) => {
  try {
    const facultyData = await prisma.facultyMember.findMany();
    if (!facultyData) {
      res.status(404).json({
        message: "No Faculty data Found"
      });
      return;
    }
    res.status(200).json({
      success: true,
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
facultyRouter.get(
  "/fa/nonteaching/getAll",
  async (req: Request, res: Response) => {
    try {
      const facultyData = await prisma.facultyMember.findMany({
        where: {
          facultyType: "Non_Teaching"
        },
        select: {
          firstName: true,
          lastName: true,
          designation: true,
          email: true,
          department: true,
          profileImageUrl: true,
          id: true,
          contactNumber: true
        }
      });
      if (!facultyData) {
        res.status(404).json({
          message: "No Faculty data Found"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: facultyData
      });
      return;
    } catch (err) {
      res.status(500).json({
        message: "Could not fetch the Faculty data, please try again later"
      });
      return;
    }
  }
);

facultyRouter.get(
  "/fa/teaching/getAll",
  async (req: Request, res: Response) => {
    try {
      const facultyData = await prisma.facultyMember.findMany({
        where: {
          facultyType: "Teaching"
        },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          socialLinks: true,
          designation: true,
          profileImageUrl: true,
          department: true,
          cvUrl: true,
          isHod: true,
          bioDataUrl: true,
          bioSummary: true,
          contactNumber: true
        }
      });
      if (!facultyData) {
        res.status(404).json({
          message: "No Faculty data Found"
        });
        return;
      }
      res.status(200).json({
        success: true,
        data: facultyData
      });
      return;
    } catch (err) {
      res.status(500).json({
        message: "Could not fetch the Faculty data, please try again later"
      });
      return;
    }
  }
);

facultyRouter.delete(
  "/delete-faculty/:id",
  userAuth,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    // console.log("Id : ", id);

    try {
      if (!id) {
        res.status(400).json({ message: "Faculty Id is required" });
        return;
      }

      const faKeys = await prisma.facultyMember.findUnique({
        where: { id: id },
        select: { imageKey: true, pdfKey: true, id: true, firstName: true }
      });
      // console.log("FaKeys : ", faKeys);

      if (!faKeys) {
        console.warn(`Faculty member with id ${id} not found.`);
        return;
      }
      if (faKeys.imageKey) {
        await attemptDelete(faKeys.imageKey, "Image");
      }
      if (faKeys.pdfKey) {
        await attemptDelete(faKeys.pdfKey, "PDF");
      }

      await prisma.facultyMember.delete({
        where: { id: id }
      });

      res.status(200).json({
        message: "Faculty member deleted successfully"
      });
      return;
    } catch (err: unknown) {
      // console.log(err);
      res.status(500).json({
        message: "Something went wrong, Please try again later!",
        error: err
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
