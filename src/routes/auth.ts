import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { signupValidation } from "../utils/validation";
import { prisma } from "../lib/prisma";
import validator from "validator";
import TokenService from "../services/tonkenService";
const authRouter = express.Router();

authRouter.post("/signup", async (req: Request, res: Response) => {
  try {
    await signupValidation(req);
    const { name, email, password } = req.body;
    console.log("Body : ", req.body);

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
      return;
    }
    const passwordHash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, password: passwordHash, email },
      select: {
        // Add select to return only needed fields
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
    return;
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

authRouter.post("/signin", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log("Body : ", req.body);
    if (!validator.isEmail(email)) {
      res.status(401).json({ message: "Invalid Credentials" });
      return;
    }

    const user = await await prisma.user.findUnique({
      where: { email },
      select: { name: true, email: true, password: true, id: true }
    });
    if (!user) {
      res.status(401).json({
        message: "Invalid Credentials"
      });
      return;
    }
    const isValidPassword = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!isValidPassword) {
      res.status(401).json({ message: "Invalid Credentials" });
      return;
    }
    if (isValidPassword) {
      const token = TokenService.generateToken({ id: user.id });
      console.log("Token : ", token);
      res.cookie("token", token, {
        maxAge: 12 * 60 * 60 * 1000,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict"
      });

      res.status(200).json({
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        },
        message: "Signin successful"
      });
      return;
    }
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});

export default authRouter;
