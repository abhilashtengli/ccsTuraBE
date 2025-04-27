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
const newsRouter = express_1.default.Router();
newsRouter.post("/add-news", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = validation_1.newsValidation.safeParse(body);
        if (!result.success) {
            res.json({
                message: "Invalid Input",
                error: result.error.errors,
            });
            return;
        }
        const { title, description, publishDate, isActive } = result.data;
        const news = yield prisma_1.prisma.newsUpdate.create({
            data: {
                title: title,
                description: description,
                publishDate: publishDate,
                isActive: isActive,
            },
        });
        res.status(201).json({
            message: "success",
            data: news,
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({
                code: "DATABASE_ERROR",
                message: "Failed to create news article due to database constraints",
            });
            return;
        }
        res.status(500).json({
            message: "Failed to create news, Something went wrong, please try again later",
        });
        return;
    }
}));
newsRouter.put("/update-news/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        const { id } = req.params;
        const body = req.body;
        const result = validation_1.newsUpdateValidation.safeParse(body);
        if (!result.success) {
            res.status(400).json({
                message: "Invalid Input",
                error: result.error.errors,
            });
            return;
        }
        // Check if news exists
        const existingNews = yield prisma_1.prisma.newsUpdate.findUnique({
            where: { id },
        });
        if (!existingNews) {
            res.status(404).json({
                message: "News article not found",
            });
            return;
        }
        // Update only provided fields (using nullish coalescing ??)
        const updatedNews = yield prisma_1.prisma.newsUpdate.update({
            where: { id },
            data: {
                title: (_a = result.data.title) !== null && _a !== void 0 ? _a : existingNews.title,
                description: (_b = result.data.description) !== null && _b !== void 0 ? _b : existingNews.description,
                publishDate: (_c = result.data.publishDate) !== null && _c !== void 0 ? _c : existingNews.publishDate,
                isActive: (_d = result.data.isActive) !== null && _d !== void 0 ? _d : existingNews.isActive,
                updatedAt: new Date().toISOString(),
            },
        });
        res.status(200).json({
            message: "success",
            data: updatedNews,
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2025") {
                res.status(404).json({
                    code: "NOT_FOUND",
                    message: "News article not found",
                });
                return;
            }
            res.status(400).json({
                code: "DATABASE_ERROR",
                message: "Failed to update news due to database constraints",
            });
            return;
        }
        res.status(500).json({
            message: "Something went wrong, please try again later",
        });
        return;
    }
}));
newsRouter.get("/ne/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const news = yield prisma_1.prisma.newsUpdate.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        if (!news) {
            res.status(404).json({
                message: "No news Found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: news,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Could not fetch the News, please try again later",
        });
        return;
    }
}));
newsRouter.delete("/delete-news/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (!id) {
            res.status(400).json({ message: "News Id is required" });
            return;
        }
        yield prisma_1.prisma.newsUpdate.delete({
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
                    message: "News not found", // Fixed message consistency
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
newsRouter.get("/get/admin-count", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Initialize all counts to 0
        let facultyCount = 0;
        let imageCount = 0;
        let videoCount = 0;
        let tendersCount = 0;
        let newsCount = 0;
        // Fetch counts
        facultyCount = yield prisma_1.prisma.facultyMember.count();
        imageCount = yield prisma_1.prisma.galleryImage.count();
        videoCount = yield prisma_1.prisma.galleryVideo.count();
        tendersCount = yield prisma_1.prisma.tender.count({
            where: { status: "Open" },
        });
        newsCount = yield prisma_1.prisma.newsUpdate.count();
        // Combine media counts
        const mediaCount = (imageCount || 0) + (videoCount || 0);
        // Return the counts in response
        res.status(200).json({
            data: {
                success: true,
                facultyCount,
                mediaCount,
                tendersCount,
                newsCount,
            },
        });
    }
    catch (err) {
        console.error("Error in /get/admin-count:", err);
        res.status(500).json({
            success: false,
            message: "Something went wrong, could not fetch data",
        });
    }
}));
exports.default = newsRouter;
