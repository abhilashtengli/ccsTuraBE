import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import { signupValidation } from "../utils/validation";
import validator from "validator";
import TokenService from "../services/tonkenService";
import { SendVerification } from "../services/SendVerification/sendVerification";
import { prisma } from "../lib/prisma";
import { userAuth } from "../middleware/auth";

const authRouter = express.Router();
interface RequestWithUser extends Request {
  user?: {
    id: string;
    email: string;
    name: string;
  } | null;
}
// authorised user only can create a new account
authRouter.post("/signup", userAuth, async (req: Request, res: Response) => {
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
        message: "User already exists",
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
    const serviceFor = "emailService";
    const emailResult = await SendVerification(
      email,
      name,
      verificationCode,
      serviceFor
    );

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
      select: {
        name: true,
        email: true,
        password: true,
        id: true,
        isVerified: true
      }
    });
    if (!user) {
      res.status(401).json({
        message: "Invalid Credentials"
      });
      return;
    }
    if (!user.isVerified) {
      res.json({
        message: "Please verify your email address before Sign In"
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
        secure: false,
        sameSite: "lax"
      });

      res.status(200).json({
        data: {
          id: user.id,
          name: user.name,
          email: user.email
        },
        message: "Signin successful"
      });
      return;
    }
  } catch (err) {
    res.status(500).json({ message: "Sign In Failed, Internal server error" });
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
    if (user.verificationCode !== code) {
      res.status(400).json({
        message: "Invalid verification code"
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
authRouter.post(
  "/resend-code",
  userAuth,
  async (req: Request, res: Response) => {
    try {
      const { email } = req.body;

      if (!email || typeof email !== "string") {
        res.status(400).json({
          error: "Email is required",
          code: "MISSING_FIELD"
        });
        return;
      }

      // Find the user
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          name: true,
          email: true,
          isVerified: true
        }
      });

      if (!user) {
        res.status(404).json({
          error: "User not found",
          code: "USER_NOT_FOUND"
        });
        return;
      }

      if (user.isVerified) {
        res.status(400).json({
          error: "User is already verified",
          code: "ALREADY_VERIFIED"
        });
        return;
      }

      // Generate a new verification code
      const verificationCode = Math.floor(
        100000 + Math.random() * 900000
      ).toString();

      // Update the user with new verification code
      await prisma.user.update({
        where: { email },
        data: {
          verificationCode,
          verificationExpires: new Date(Date.now() + 10 * 60 * 1000) // 10 minutes
        }
      });

      // Send the email
      const serviceFor = "emailService";
      const emailResult = await SendVerification(
        email,
        user.name,
        verificationCode,
        serviceFor
      );

      if (!emailResult.success) {
        res.status(500).json({
          error: "Failed to send verification email",
          code: "EMAIL_SEND_FAILED",
          message: emailResult.message
        });
        return;
      }

      res.status(200).json({
        message: "Verification code has been sent to your email",
        success: true
      });
      return;
    } catch (err) {
      const errorId = Math.random().toString(36).substring(2, 9);
      res.status(500).json({
        error: "Internal server error",
        code: "INTERNAL_ERROR",
        errorId,
        ...(process.env.NODE_ENV !== "production" && {
          details: err instanceof Error ? err.message : "Unknown error"
        })
      });
      return;
    }
  }
);

authRouter.post("/forgot-password", async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    if (!validator.isEmail(email)) {
      res.status(401).json({ message: "Invalid email address" });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { email },
      select: { isVerified: true, name: true }
    });
    if (!user) {
      res.status(401).json({
        message: "Invalid Credentials"
      });
      return;
    }
    if (!user.isVerified) {
      res.json({
        message:
          "Please verify your email address before resetting your password"
      });
      return;
    }
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    await prisma.user.update({
      where: { email },
      data: {
        verificationCode: verificationCode,
        verificationExpires: new Date(Date.now() + 10 * 60 * 1000)
      }
    });
    const serviceFor = "passwordService";
    const emailResult = await SendVerification(
      email,
      user.name,
      verificationCode,
      serviceFor
    );

    if (!emailResult.success) {
      res.status(500).json({
        message: "Failed to send forgot password code",
        error: emailResult.message
      });
    }

    res.status(200).json({
      message: "A verification code has been sent to your email",
      success: true
    });
    return;
  } catch (err) {
    res.status(500).json({
      message: "Internal server error, please try again later",
      success: false
    });
  }
});

authRouter.post("/verify-code", async (req: Request, res: Response) => {
  const { email, code, newPassword } = req.body;

  try {
    if (!email || !code || !newPassword) {
      res
        .status(400)
        .json({ message: "All fields are required", success: false });
      return;
    }

    if (!validator.isEmail(email)) {
      res.status(401).json({ message: "Invalid Credentials" });
      return;
    }
    const user = await prisma.user.findUnique({
      where: { email },
      select: { verificationCode: true, verificationExpires: true }
    });

    if (!user) {
      res.status(404).json({
        message: "User not found"
      });
      return;
    }
    if (user.verificationCode !== code) {
      res.status(400).json({
        message: "Invalid verification code"
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
    if (!validator.isStrongPassword(newPassword)) {
      res.json({
        message: "Enter a strong password",
        success: false
      });
      return;
    }
    const passwordHash = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: { email },
      data: {
        password: passwordHash,
        verificationCode: null,
        verificationExpires: null
      }
    });
    res.status(200).json({
      success: true,
      message: "password updated successfully"
    });
    return;
  } catch (err) {
    res.status(500).json({
      message: "Internal server error, please try again later",
      success: false
    });
  }
});

authRouter.get("/getUser", userAuth, async (req: Request, res: Response) => {
  const user = (req as RequestWithUser).user;

  try {
    const loggedInUser = await prisma.user.findUnique({
      where: { id: user?.id },
      select: { id: true, name: true, email: true }
    });

    res.status(200).json({
      success: true,
      data: loggedInUser
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to fetch user, Try to signout and signin or contact support"
    });
  }
});

authRouter.post("/signout", async (req: Request, res: Response) => {
  console.log("Entered signout");
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
    secure: true,
    sameSite: "none"
  });

  res.status(200).json({ message: "Logged out" });
});

export default authRouter;
