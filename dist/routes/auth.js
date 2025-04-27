"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const validation_1 = require("../utils/validation");
const validator_1 = __importDefault(require("validator"));
const tonkenService_1 = __importDefault(require("../services/tonkenService"));
const sendVerification_1 = require("../services/SendVerification/sendVerification");
const prisma_1 = require("../lib/prisma");
const auth_1 = require("../middleware/auth");
const authRouter = express_1.default.Router();
// authorised user only can create a new account
authRouter.post("/signup", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, validation_1.signupValidation)(req);
        const { name, email, password } = req.body;
        // console.log("Body : ", req.body);
        const existingUser = yield prisma_1.prisma.user.findUnique({
            where: { email },
            select: { id: true },
        });
        if (existingUser) {
            res.status(409).json({
                // Use return to prevent further execution
                message: "User already exists",
                code: "USER_EXISTS", // Standardized error code
            });
            return;
        }
        const passwordHash = yield bcrypt_1.default.hash(password, 10);
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        const user = yield prisma_1.prisma.user.create({
            data: {
                name,
                password: passwordHash,
                email,
                verificationCode,
                verificationExpires: new Date(Date.now() + 10 * 60 * 1000),
            },
            select: {
                // Add select to return only needed fields
                id: true,
                name: true,
                email: true,
                createdAt: true,
            },
        });
        const serviceFor = "emailService";
        const emailResult = yield (0, sendVerification_1.SendVerification)(email, name, verificationCode, serviceFor);
        if (!emailResult.success) {
            res.status(500).json({
                message: "User created, but failed to send verification email",
                error: emailResult.message,
            });
        }
        res.status(201).json({
            message: "Please verify your account by entering the code sent to you email : " +
                email,
            success: true,
            data: user,
        });
        return;
    }
    catch (err) {
        const errorId = Math.random().toString(36).substring(2, 9);
        res.status(500).json(Object.assign({ error: "Internal server error", code: "INTERNAL_ERROR", errorId }, (process.env.NODE_ENV !== "production" && {
            details: err instanceof Error ? err.message : "Unknown error",
        })));
    }
}));
authRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // console.log("Body : ", req.body);
        if (!validator_1.default.isEmail(email)) {
            res.status(401).json({ success: false, message: "Invalid Credentials" });
            return;
        }
        const user = yield yield prisma_1.prisma.user.findUnique({
            where: { email },
            select: {
                name: true,
                email: true,
                password: true,
                id: true,
                isVerified: true,
            },
        });
        if (!user) {
            res.status(401).json({
                success: false,
                message: "Invalid Credentials",
            });
            return;
        }
        if (!user.isVerified) {
            res.status(403).json({
                success: false,
                message: "Please verify your email address before Signing In",
            });
            return;
        }
        const isValidPassword = yield bcrypt_1.default.compare(password, (user === null || user === void 0 ? void 0 : user.password) || "");
        if (!isValidPassword) {
            res.status(401).json({ success: false, message: "Invalid Credentials" });
            return;
        }
        if (isValidPassword) {
            const token = tonkenService_1.default.generateToken({ id: user.id });
            // console.log("Token : ", token);
            res.cookie("token", token, {
                maxAge: 12 * 60 * 60 * 1000,
                httpOnly: true,
                secure: false,
                sameSite: "lax",
            });
            res.status(200).json({
                success: true,
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                },
                message: "Signin successful",
            });
            return;
        }
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Sign In Failed, Internal server error",
        });
    }
}));
authRouter.post("/verify-email", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, code } = req.body;
    if (!email || !code) {
        res.status(400).json({ message: "Email and code are required" });
        return;
    }
    try {
        const user = yield prisma_1.prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                isVerified: true,
                verificationCode: true,
                verificationExpires: true,
                name: true,
            },
        });
        if (!user) {
            res.status(404).json({
                message: "User not found",
            });
            return;
        }
        if (user.isVerified) {
            res.status(200).json({
                message: "Email is already verified",
            });
            return;
        }
        if (!user.verificationCode ||
            !user.verificationExpires ||
            user.verificationExpires < new Date()) {
            res.status(400).json({
                message: "Invalid or expired verification code",
            });
            return;
        }
        if (user.verificationCode !== code) {
            res.status(400).json({
                message: "Invalid verification code",
            });
            return;
        }
        yield prisma_1.prisma.user.update({
            where: { email },
            data: {
                isVerified: true,
                verificationCode: null,
                verificationExpires: null,
            },
        });
        res.status(200).json({ message: "Email verified successfully" });
        return;
    }
    catch (err) {
        // console.log("Verification err : ", err);
        res.status(500).json({
            message: "Email Verification Failed due to internal server error",
            success: false,
        });
    }
}));
authRouter.post("/resend-code", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        if (!email || typeof email !== "string") {
            res.status(400).json({
                error: "Email is required",
                code: "MISSING_FIELD",
            });
            return;
        }
        // Find the user
        const user = yield prisma_1.prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                name: true,
                email: true,
                isVerified: true,
            },
        });
        if (!user) {
            res.status(404).json({
                error: "User not found",
                message: "USER_NOT_FOUND",
            });
            return;
        }
        if (user.isVerified) {
            res.status(400).json({
                error: "User is already verified",
                message: "ALREADY_VERIFIED",
            });
            return;
        }
        // Generate a new verification code
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        // Update the user with new verification code
        yield prisma_1.prisma.user.update({
            where: { email },
            data: {
                verificationCode,
                verificationExpires: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes
            },
        });
        // Send the email
        const serviceFor = "emailService";
        const emailResult = yield (0, sendVerification_1.SendVerification)(email, user.name, verificationCode, serviceFor);
        if (!emailResult.success) {
            res.status(500).json({
                error: "Failed to send verification email",
                code: "EMAIL_SEND_FAILED",
                message: "Email send failed : " + emailResult.message,
            });
            return;
        }
        res.status(200).json({
            message: "Verification code has been sent to your email",
            success: true,
        });
        return;
    }
    catch (err) {
        const errorId = Math.random().toString(36).substring(2, 9);
        res.status(500).json(Object.assign({ error: "Internal server error", code: "INTERNAL_ERROR", errorId }, (process.env.NODE_ENV !== "production" && {
            details: err instanceof Error ? err.message : "Unknown error",
        })));
        return;
    }
}));
authRouter.post("/forgot-password", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        if (!validator_1.default.isEmail(email)) {
            res.status(401).json({ message: "Invalid email address" });
            return;
        }
        const user = yield prisma_1.prisma.user.findUnique({
            where: { email },
            select: { isVerified: true, name: true },
        });
        if (!user) {
            res.status(401).json({
                message: "Invalid Credentials",
            });
            return;
        }
        if (!user.isVerified) {
            res.json({
                message: "Please verify your email address before resetting your password",
            });
            return;
        }
        const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
        yield prisma_1.prisma.user.update({
            where: { email },
            data: {
                verificationCode: verificationCode,
                verificationExpires: new Date(Date.now() + 10 * 60 * 1000),
            },
        });
        const serviceFor = "passwordService";
        const emailResult = yield (0, sendVerification_1.SendVerification)(email, user.name, verificationCode, serviceFor);
        if (!emailResult.success) {
            res.status(500).json({
                message: "Failed to send forgot password code",
                error: emailResult.message,
            });
        }
        res.status(200).json({
            message: "A verification code has been sent to your email",
            success: true,
        });
        return;
    }
    catch (err) {
        res.status(500).json({
            message: "Internal server error, please try again later",
            success: false,
        });
    }
}));
authRouter.post("/verify-code", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, code, newPassword } = req.body;
    try {
        if (!email || !code || !newPassword) {
            res
                .status(400)
                .json({ message: "All fields are required", success: false });
            return;
        }
        if (!validator_1.default.isEmail(email)) {
            res.status(401).json({ message: "Invalid Credentials" });
            return;
        }
        const user = yield prisma_1.prisma.user.findUnique({
            where: { email },
            select: { verificationCode: true, verificationExpires: true },
        });
        if (!user) {
            res.status(404).json({
                message: "User not found",
            });
            return;
        }
        if (user.verificationCode !== code) {
            res.status(400).json({
                message: "Invalid verification code",
            });
            return;
        }
        if (!user.verificationCode ||
            !user.verificationExpires ||
            user.verificationExpires < new Date()) {
            res.status(400).json({
                message: "Invalid or expired verification code",
            });
            return;
        }
        if (!validator_1.default.isStrongPassword(newPassword)) {
            res.json({
                message: "Enter a strong password",
                success: false,
            });
            return;
        }
        const passwordHash = yield bcrypt_1.default.hash(newPassword, 10);
        yield prisma_1.prisma.user.update({
            where: { email },
            data: {
                password: passwordHash,
                verificationCode: null,
                verificationExpires: null,
            },
        });
        res.status(200).json({
            success: true,
            message: "password updated successfully",
        });
        return;
    }
    catch (err) {
        res.status(500).json({
            message: "Internal server error, please try again later",
            success: false,
        });
    }
}));
authRouter.get("/getUser", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.user;
    try {
        const loggedInUser = yield prisma_1.prisma.user.findUnique({
            where: { id: user === null || user === void 0 ? void 0 : user.id },
            select: { id: true, name: true, email: true },
        });
        res.status(200).json({
            success: true,
            data: loggedInUser,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Failed to fetch user, Try to signout and signin or contact support",
        });
    }
}));
authRouter.post("/signout", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("Entered signout");
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
        secure: true,
        sameSite: "none",
    });
    res.status(200).json({ message: "Logged out" });
}));
exports.default = authRouter;
