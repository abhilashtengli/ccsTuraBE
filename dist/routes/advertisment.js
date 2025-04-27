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
const advertismentRouter = express_1.default.Router();
advertismentRouter.post("/add-advertisment", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        //   console.log("User in ad : ", user);
        const body = req.body;
        const result = validation_1.advertismentValidation.safeParse(body);
        if (!result.success) {
            res.json({
                message: "Invalid Input",
                error: result.error.errors,
            });
            return;
        }
        const { title, description, department, isActive, deadlineDate, pdfUrl, pdfKey, } = result.data;
        //   console.log("Result data : ", result.data);
        const advertisement = yield prisma_1.prisma.advertisement.create({
            data: {
                title: title,
                deadlineDate: deadlineDate,
                description: description,
                department: department,
                isActive: isActive,
                pdfUrl: pdfUrl,
                pdfKey: pdfKey,
            },
        });
        // console.log("Ad : ", advertisement);
        res.status(201).json({
            message: "success",
            data: advertisement,
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({
                code: "DATABASE_ERROR",
                message: "Failed to create advertisement due to database constraints",
            });
            return;
        }
        res.status(500).json({
            message: "Something went wrong, please try again later : ",
            err,
        });
        return;
    }
}));
advertismentRouter.put("/update-advertisment/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g;
    try {
        const { id } = req.params;
        const body = req.body;
        const result = validation_1.advertismentUpdateValidation.safeParse(body);
        if (!result.success) {
            res.status(400).json({
                message: "Invalid Input",
                error: result.error.errors,
            });
            return;
        }
        // Check if advertisement exists
        const existingAd = yield prisma_1.prisma.advertisement.findUnique({
            where: { id },
        });
        if (!existingAd) {
            res.status(404).json({
                message: "Advertisement not found",
            });
            return;
        }
        const updatedAdvertisement = yield prisma_1.prisma.advertisement.update({
            where: { id },
            data: {
                title: (_a = result.data.title) !== null && _a !== void 0 ? _a : existingAd.title,
                description: (_b = result.data.description) !== null && _b !== void 0 ? _b : existingAd.description,
                department: (_c = result.data.department) !== null && _c !== void 0 ? _c : existingAd.department,
                isActive: (_d = result.data.isActive) !== null && _d !== void 0 ? _d : existingAd.isActive,
                deadlineDate: (_e = result.data.deadlineDate) !== null && _e !== void 0 ? _e : existingAd.deadlineDate,
                pdfUrl: (_f = result.data.pdfUrl) !== null && _f !== void 0 ? _f : existingAd.pdfUrl,
                pdfKey: (_g = result.data.pdfKey) !== null && _g !== void 0 ? _g : existingAd.pdfKey,
                updatedAt: new Date().toISOString(),
            },
        });
        res.status(200).json({
            message: "success",
            data: updatedAdvertisement,
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2025") {
                res.status(404).json({
                    code: "NOT_FOUND",
                    message: "Advertisement not found",
                });
            }
            else {
                res.status(400).json({
                    code: "DATABASE_ERROR",
                    message: "Failed to update advertisement due to database constraints",
                });
            }
            return;
        }
        res.status(500).json({
            message: "Something went wrong, please try again later",
        });
        return;
    }
}));
advertismentRouter.get("/ad/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const advertisement = yield prisma_1.prisma.advertisement.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        if (!advertisement) {
            res.status(404).json({
                message: "No advertisement Found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: advertisement,
        });
        return;
    }
    catch (err) {
        res.status(500).json({
            message: "Could not fetch the advertisements, please try again later",
        });
        return;
    }
}));
advertismentRouter.delete("/delete-advertisement/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (!id) {
            res.status(400).json({ message: "Advertisement Id is required" });
            return;
        }
        const ad = yield prisma_1.prisma.advertisement.findUnique({
            where: { id: id },
            select: { pdfKey: true, id: true, title: true },
        });
        if (!ad) {
            res.status(404).json({
                message: "Advertisment not found",
            });
            return;
        }
        if (ad.pdfKey !== null) {
            const deletionResult = yield (0, cloudflare_1.deleteContent)(ad.pdfKey);
            if (!(deletionResult === null || deletionResult === void 0 ? void 0 : deletionResult.success)) {
                console.warn(`AD deletion failed for ${ad.pdfKey}:`, deletionResult.error);
            }
        }
        yield prisma_1.prisma.advertisement.delete({
            where: { id: id },
        });
        res.status(200).json({
            message: "Advertisement deleted successfully",
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            res.status(404).json({
                message: "Image record not found",
            });
            return;
        }
        res.status(500).json({
            message: err instanceof Error ? err.message : "Deletion failed",
        });
        return;
    }
}));
exports.default = advertismentRouter;
