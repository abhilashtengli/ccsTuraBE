import express, { Request, Response } from "express";
import authRouter from "./auth";
import { facultyValidation } from "utils/validation";
import { generatePresignedUrl } from "services/Cloudflare/cloudflare";
const facultyRouter = express.Router();

facultyRouter.post(
  "/add-faculty",
  authRouter,
  async (req: Request, res: Response) => {
    try {
      const body = req.body;
      const result = await facultyValidation.safeParse(body);
      if (!result.success) {
        res.json({
          message: "Invalid Input",
          error: result.error.errors
        });
        return;
      }
      const user = req.user;
      if (!user) {
        res
          .status(401)
          .send({ message: "Please Sign In to add Faculty members" });
        return;
      }

      const {
        firstName,
        lastName,
        email,
        contactNumber,
        profileImageUrl,
        designation,
        isHod,
        facultyType,
        cvUrl,
        socialLinks,
        department
      } = result.data;
    } catch (err) {}
  }
);

facultyRouter.post(
  "/getSigned-url",
  authRouter,
  async (req: Request, res: Response) => {
    const { fileName, contentType } = req.body;
    const { signedUrl, key, publicUrl } = await generatePresignedUrl(
      fileName,
      contentType
    );
    res.json({ signedUrl, key, publicUrl });
    return;
  }
);

//Step to upload file and save file url
// 1. getPresignedUrl
// 2. UploadTheFile
// 3. getSavedFileUrl
// 4. SaveUrlInDb
