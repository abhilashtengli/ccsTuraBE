import express, { Request, Response } from "express";
import { deleteContent } from "../services/Cloudflare/cloudflare";
import { userAuth } from "../middleware/auth";

const cloudflareRouter = express.Router();

cloudflareRouter.delete("/delete-file", async (req: Request, res: Response) => {
  const { key } = req.body; // Notice req.params[0] here
  console.log("Key received:", key);

  const deletionResult = await deleteContent(key);

  if (!deletionResult.success) {
    res.status(500).json({
      message: "Something went wrong",
      error: deletionResult.error
    });
    return;
  }

  res.status(200).json({
    message: "Delete successful",
    success: deletionResult.success
  });
});

export default cloudflareRouter;
