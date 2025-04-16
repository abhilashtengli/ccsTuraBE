import express, { Request, Response } from "express";
import { generatePresignedUrl } from "../services/Cloudflare/cloudflare";
import authRouter from "./auth";

const signedUrlRouter = express.Router();

signedUrlRouter.post(
  "/getSigned-url",
    authRouter,
  async (req: Request, res: Response) => {
    const { fileName, contentType } = req.body;
    console.log("BODY : ", req.body);
    const { signedUrl, key, publicUrl } = await generatePresignedUrl(
      fileName,
      contentType
    );
    console.log("RESPONSE sUrl : ", signedUrl);
    console.log("RESPONSE pUrl : ", publicUrl);
    res.json({ signedUrl, publicUrl, key });
    return;
  }
);

export default signedUrlRouter;
