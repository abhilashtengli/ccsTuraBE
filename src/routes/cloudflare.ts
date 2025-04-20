import express, { Request, Response } from "express";
import { deleteContent } from "../services/Cloudflare/cloudflare";

const cloudflareRouter = express.Router();

cloudflareRouter.delete("/delete-file", async (req: Request, res: Response) => {
  const { key } = req.body;

  const deletionResult = await deleteContent(key);

  if (!deletionResult.success) {
    res.status(500).json({
      message: "Something went wrong",
      error: deletionResult.error
    });
  }

  res.status(200).json({
    message: "Delete successfull",
    success: deletionResult.success
  });
});


export default cloudflareRouter;