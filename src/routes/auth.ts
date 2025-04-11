import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { signupValidation } from "utils/validation";
import { prisma } from "@lib/prisma";
const authRouter = express.Router();

authRouter.post("/signup", async (req: Request, res: Response) => {
  try {
    await signupValidation(req);
    const { name, email, password } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { email },
      select: { id: true }
    });
    if (existingUser) {
      res.status(409).json({
        // Use return to prevent further execution
        error: "User already exists",
        code: "USER_EXISTS" // Standardized error code
      });
    }
    const passwordHash = await bcrypt.hash(password, 10);

    const user = prisma.user.create({
      data: { name, password: passwordHash, email },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true
      }
    });

    res.status(201).json({
      success: true,
      data: user
    });
  } catch (err) {
    const errorId = Math.random().toString(36).substring(2, 9);
    res.status(500).json({
      error: "Internal server error",
      code: "INTERNAL_ERROR",
      errorId, // Provide error ID for support tracking
      ...(process.env.NODE_ENV !== "production" && {
        details: err instanceof Error ? err.message : "Unknown error"
      })
    });
  }
});

