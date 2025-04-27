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
const auth_1 = require("../middleware/auth");
const videoRouter = express_1.default.Router();
videoRouter.post("/add-video", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = validation_1.videoValidation.safeParse(body);
        if (!result.success) {
            res.json({
                message: "Invalid Input",
                error: result.error.errors
            });
            return;
        }
        const { category, title, youtubeUrl } = result.data;
        const video = yield prisma_1.prisma.galleryVideo.create({
            data: {
                category: category,
                title: title,
                youtubeUrl: youtubeUrl
            }
        });
        res.status(201).json({
            message: "success",
            data: video
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({
                code: "DATABASE_ERROR",
                message: "Failed to add video due to database constraints"
            });
            return;
        }
        res.status(500).json({
            message: "Something went wrong, please try again later"
        });
        return;
    }
}));
videoRouter.put("/update-video/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const { id } = req.params;
        const body = req.body;
        const result = validation_1.videoUpdateValidation.safeParse(body);
        if (!result.success) {
            res.status(400).json({
                message: "Invalid Input",
                error: result.error.errors
            });
            return;
        }
        // Check if video exists
        const existingVideo = yield prisma_1.prisma.galleryVideo.findUnique({
            where: { id }
        });
        if (!existingVideo) {
            res.status(404).json({
                message: "Video not found"
            });
            return;
        }
        // Update only provided fields
        const updatedVideo = yield prisma_1.prisma.galleryVideo.update({
            where: { id },
            data: {
                youtubeUrl: (_a = result.data.youtubeUrl) !== null && _a !== void 0 ? _a : existingVideo.youtubeUrl,
                category: (_b = result.data.category) !== null && _b !== void 0 ? _b : existingVideo.category,
                title: (_c = result.data.title) !== null && _c !== void 0 ? _c : existingVideo.title,
                updatedAt: new Date().toISOString()
            }
        });
        res.status(200).json({
            message: "success",
            data: updatedVideo
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2025") {
                res.status(404).json({
                    code: "NOT_FOUND",
                    message: "Video not found"
                });
                return;
            }
            res.status(400).json({
                code: "DATABASE_ERROR",
                message: "Failed to update video due to database constraints"
            });
            return;
        }
        res.status(500).json({
            message: "Something went wrong, please try again later"
        });
        return;
    }
}));
videoRouter.get("/vi/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videos = yield prisma_1.prisma.galleryVideo.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        if (!videos) {
            res.status(404).json({
                message: "No videos Found"
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: videos
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Could not fetch the videos, please try again later"
        });
        return;
    }
}));
videoRouter.delete("/delete-video/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (!id) {
            res.status(400).json({ message: "Video Id is required" });
            return;
        }
        const video = yield prisma_1.prisma.galleryVideo.findUnique({
            where: { id: id },
            select: { youtubeUrl: true, category: true }
        });
        if (!video) {
            res.status(404).json({
                message: "Video not found"
            });
            return;
        }
        yield prisma_1.prisma.galleryVideo.delete({
            where: { id: id }
        });
        res.status(200).json({
            message: "Video deleted successfully"
        });
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2025") {
                res.status(404).json({
                    message: "Video not found" // Fixed message consistency
                });
                return;
            }
        }
        res.status(500).json({
            message: "Something went wrong, Please try again later!"
        });
        return;
    }
}));
exports.default = videoRouter;
