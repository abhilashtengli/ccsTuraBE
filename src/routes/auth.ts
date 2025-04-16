import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { signupValidation } from "../utils/validation";
import validator from "validator";
import TokenService from "../services/tonkenService";
import { SendVerification } from "../services/SendVerification/sendVerification";
import { prisma } from "../lib/prisma";

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
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = await prisma.user.create({
      data: {
        name,
        password: passwordHash,
        email,
        verificationCode,
        verificationExpires: new Date(Date.now() + 10 * 60 * 1000)
      },
      select: {
        // Add select to return only needed fields
        id: true,
        name: true,
        email: true,
        createdAt: true
      }
    });
    const emailResult = await SendVerification(email, name, verificationCode);

    if (!emailResult.success) {
      res.status(500).json({
        message: "User created, but failed to send verification email",
        error: emailResult.message
      });
    }
    res.status(201).json({
      message:
        "Please verify your account by entering the code sent to you email : " +
        email,
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

authRouter.post("/verify-email", async (req: Request, res: Response) => {
  const { email, code } = req.body;

  if (!email || !code) {
    res.status(400).json({ message: "Email and code are required" });
    return;
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        isVerified: true,
        verificationCode: true,
        verificationExpires: true,
        name: true
      }
    });

    if (!user) {
      res.status(404).json({
        message: "User not found"
      });
      return;
    }
    if (user.isVerified) {
      res.status(200).json({
        message: "Email is already verified"
      });
      return;
    }
    if (
      !user.verificationCode ||
      !user.verificationExpires ||
      user.verificationExpires < new Date()
    ) {
      res.status(400).json({
        message: "Invalid or expired verification code"
      });
      return;
    }
    await prisma.user.update({
      where: { email },
      data: {
        isVerified: true,
        verificationCode: null,
        verificationExpires: null
      }
    });
    res.status(200).json({ message: "Email verified successfully" });
    return;
  } catch (err) {
    console.log("Verification err : ", err);
    res.status(500).json({
      message: "Email Verification Failed due to internal server error",
      success: false
    });
  }
});
export default authRouter;
