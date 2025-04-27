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
const validation_1 = require("../utils/validation");
const prisma_1 = require("../lib/prisma");
const prisma_2 = require("../generated/prisma");
const cloudflare_1 = require("../services/Cloudflare/cloudflare");
const auth_1 = require("../middleware/auth");
const noticeRouter = express_1.default.Router();
noticeRouter.post("/add-notice", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = yield validation_1.noticeValidation.safeParse(body);
        if (!result.success) {
            res.json({
                message: "Invalid Inputs",
                error: result.error.errors,
            });
            return;
        }
        const { category, title, pdfUrl, isActive, pdfKey } = result.data;
        const notice = yield prisma_1.prisma.notice.create({
            data: {
                category: category,
                title: title,
                pdfUrl: pdfUrl,
                isActive: isActive,
                pdfKey: pdfKey,
            },
        });
        if (!notice) {
            res.status(500).json({
                message: "Failed to upload notice. Please try again.",
            });
        }
        res.status(201).json({
            message: "success",
            data: notice,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Failed to upload notice",
            error: err instanceof Error ? err.message : "Unknown error",
        });
    }
}));
noticeRouter.put("/update-notice/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    try {
        const { id } = req.params;
        const body = req.body;
        const result = validation_1.noticeUpdateValidation.safeParse(body);
        if (!result.success) {
            res.status(400).json({
                message: "Invalid Inputs",
                error: result.error.errors,
            });
            return;
        }
        // Check if notice exists
        const existingNotice = yield prisma_1.prisma.notice.findUnique({
            where: { id },
        });
        if (!existingNotice) {
            res.status(404).json({
                message: "Notice not found",
            });
            return;
        }
        // Update only provided fields
        const updatedNotice = yield prisma_1.prisma.notice.update({
            where: { id },
            data: {
                category: (_a = result.data.category) !== null && _a !== void 0 ? _a : existingNotice.category,
                title: (_b = result.data.title) !== null && _b !== void 0 ? _b : existingNotice.title,
                pdfUrl: (_c = result.data.pdfUrl) !== null && _c !== void 0 ? _c : existingNotice.pdfUrl,
                pdfKey: (_d = result.data.pdfKey) !== null && _d !== void 0 ? _d : existingNotice.pdfKey,
                isActive: (_e = result.data.isActive) !== null && _e !== void 0 ? _e : existingNotice.isActive,
                updatedAt: new Date().toISOString(),
            },
        });
        res.status(200).json({
            message: "success",
            data: updatedNotice,
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2025") {
                res.status(404).json({
                    message: "Notice not found",
                    code: "NOT_FOUND",
                });
                return;
            }
            res.status(400).json({
                message: "Database error",
                code: "DATABASE_ERROR",
                error: err.message,
            });
            return;
        }
        res.status(500).json({
            message: "Failed to update notice",
            error: err instanceof Error ? err.message : "Unknown error",
        });
        return;
    }
}));
noticeRouter.get("/no/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notices = yield prisma_1.prisma.notice.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        if (!notices) {
            throw new Error("Failed to fetch all notice");
        }
        res.status(200).json({
            success: true,
            data: notices,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Failed to fetch All notice",
            error: err instanceof Error ? err.message : "Unknown error",
        });
    }
}));
noticeRouter.delete("/delete-notice/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (!id) {
            res.status(404).json({
                message: "Notice Id is required",
            });
        }
        const notice = yield prisma_1.prisma.notice.findUnique({
            where: { id: id },
            select: { pdfKey: true, pdfUrl: true, title: true, category: true },
        });
        if (!notice) {
            res.status(404).json({
                message: "Notice not found",
            });
            return;
        }
        if (notice.pdfKey !== null) {
            const deletionResult = yield (0, cloudflare_1.deleteContent)(notice.pdfKey);
            if (!(deletionResult === null || deletionResult === void 0 ? void 0 : deletionResult.success)) {
                console.warn(`Notice deletion failed for ${notice.pdfKey}:`, deletionResult.error);
            }
        }
        yield prisma_1.prisma.notice.delete({
            where: { id: id },
        });
        res.status(200).json({
            message: "Notice deleted successfully",
        });
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2025") {
                res.status(404).json({
                    message: "Notice not found", // Fixed message consistency
                });
                return;
            }
            res.status(400).json({
                message: "Database operation failed",
            });
            return;
        }
        res.status(500).json({
            message: "Something went wrong, Please try again later!",
        });
        return;
    }
}));
exports.default = noticeRouter;
