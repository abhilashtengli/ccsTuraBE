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
const imageRouter = express_1.default.Router();
imageRouter.post("/add-image", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = validation_1.imageValidation.safeParse(body);
        if (!result.success) {
            res.json({
                message: "Invalid Input",
                error: result.error.errors
            });
            return;
        }
        const { category, imageUrl, imageKey } = result.data;
        const image = yield prisma_1.prisma.galleryImage.create({
            data: {
                category: category,
                imageUrl: imageUrl,
                imageKey: imageKey
            }
        });
        res.status(201).json({
            message: "success",
            data: image
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({
                code: "DATABASE_ERROR",
                message: "Failed to add image due to database constraints"
            });
            return;
        }
        res.status(500).json({
            message: "Something went wrong, please try again later"
        });
        return;
    }
}));
imageRouter.put("/update-image/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const { id } = req.params;
        const body = req.body;
        const result = validation_1.imageUpdateValidation.safeParse(body);
        if (!result.success) {
            res.status(400).json({
                message: "Invalid Input",
                error: result.error.errors
            });
            return;
        }
        // Check if image exists
        const existingImage = yield prisma_1.prisma.galleryImage.findUnique({
            where: { id }
        });
        if (!existingImage) {
            res.status(404).json({
                message: "Image not found"
            });
            return;
        }
        // Update only provided fields
        const updatedImage = yield prisma_1.prisma.galleryImage.update({
            where: { id },
            data: {
                imageUrl: (_a = result.data.imageUrl) !== null && _a !== void 0 ? _a : existingImage.imageUrl,
                imageKey: (_b = result.data.imageKey) !== null && _b !== void 0 ? _b : existingImage.imageKey,
                category: (_c = result.data.category) !== null && _c !== void 0 ? _c : existingImage.category,
                updatedAt: new Date().toISOString()
            }
        });
        res.status(200).json({
            message: "success",
            data: updatedImage
        });
        return;
    }
    catch (err) {
        res.status(500).json({
            message: "Something went wrong, please try again later"
        });
        return;
    }
}));
imageRouter.get("/im/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const images = yield prisma_1.prisma.galleryImage.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        if (!images) {
            res.status(404).json({
                message: "No images Found"
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: images
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Could not fetch the Images, please try again later"
        });
        return;
    }
}));
imageRouter.delete("/delete-image/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (!id) {
            res.status(400).json({ message: "Image Id is required" });
            return;
        }
        const image = yield prisma_1.prisma.galleryImage.findUnique({
            where: { id: id },
            select: { imageKey: true, imageUrl: true, category: true }
        });
        if (!image) {
            res.status(404).json({
                message: "Image not found"
            });
            return;
        }
        const deletionResult = yield (0, cloudflare_1.deleteContent)(image.imageKey);
        if (!(deletionResult === null || deletionResult === void 0 ? void 0 : deletionResult.success)) {
            console.warn(`Image deletion failed for ${image.imageKey}:`, deletionResult.error);
        }
        yield prisma_1.prisma.galleryImage.delete({
            where: { id: id }
        });
        res.status(200).json({
            code: deletionResult.success ? "FULLY_DELETED" : "PARTIALLY_DELETED",
            message: deletionResult.success
                ? "Image deleted successfully"
                : "Image record removed (storage deletion failed)",
            details: deletionResult.success
                ? undefined
                : {
                    storageError: deletionResult.error
                }
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            res.status(404).json({
                code: "NOT_FOUND",
                message: "Image record not found"
            });
            return;
        }
        res.status(500).json({
            message: err instanceof Error ? err.message : "Deletion failed"
        });
        return;
    }
}));
exports.default = imageRouter;
