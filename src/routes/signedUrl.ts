import express, { Request, Response } from "express";
import { generatePresignedUrl } from "../services/Cloudflare/cloudflare";
import authRouter from "./auth";
import { userAuth } from "../middleware/auth";

const signedUrlRouter = express.Router();

signedUrlRouter.post(
  "/getSigned-url",
  userAuth,
  async (req: Request, res: Response) => {
    const { fileName, contentType } = req.body;
    const { signedUrl, key, publicUrl } = await generatePresignedUrl(
      fileName,
      contentType
    );

    res.json({ signedUrl, publicUrl, key });
    return;
  }
);

export default signedUrlRouter;
