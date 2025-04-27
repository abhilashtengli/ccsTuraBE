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
const tenderRouter = express_1.default.Router();
tenderRouter.post("/add-tender", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = validation_1.tenderValidation.safeParse(body);
        if (!result.success) {
            res.json({
                message: "Invalid Input",
                error: result.error.errors
            });
            return;
        }
        const { title, reference, publishedDate, closingDate, category, pdfUrl, pdfKey, status } = result.data;
        const tender = yield prisma_1.prisma.tender.create({
            data: {
                title: title,
                reference: reference,
                publishedDate: publishedDate,
                closingDate: closingDate,
                category: category,
                pdfUrl: pdfUrl,
                pdfKey: pdfKey,
                status: status
            }
        });
        res.status(201).json({
            message: "success",
            data: tender
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({
                code: "DATABASE_ERROR",
                message: "Failed to create tender due to database constraints"
            });
            return;
        }
        res.status(500).json({
            message: "Something went wrong, please try again later"
        });
        return;
    }
}));
tenderRouter.put("/update-tender/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    try {
        const { id } = req.params;
        const body = req.body;
        const result = validation_1.tenderUpdateValidation.safeParse(body);
        if (!result.success) {
            res.status(400).json({
                message: "Invalid Input",
                error: result.error.errors
            });
            return;
        }
        // Check if tender exists
        const existingTender = yield prisma_1.prisma.tender.findUnique({
            where: { id }
        });
        if (!existingTender) {
            res.status(404).json({
                message: "Tender not found"
            });
            return;
        }
        // Update only provided fields
        const updatedTender = yield prisma_1.prisma.tender.update({
            where: { id },
            data: {
                title: (_a = result.data.title) !== null && _a !== void 0 ? _a : existingTender.title,
                reference: (_b = result.data.reference) !== null && _b !== void 0 ? _b : existingTender.reference,
                publishedDate: (_c = result.data.publishedDate) !== null && _c !== void 0 ? _c : existingTender.publishedDate,
                closingDate: (_d = result.data.closingDate) !== null && _d !== void 0 ? _d : existingTender.closingDate,
                category: (_e = result.data.category) !== null && _e !== void 0 ? _e : existingTender.category,
                pdfUrl: (_f = result.data.pdfUrl) !== null && _f !== void 0 ? _f : existingTender.pdfUrl,
                pdfKey: (_g = result.data.pdfKey) !== null && _g !== void 0 ? _g : existingTender.pdfKey,
                status: (_h = result.data.status) !== null && _h !== void 0 ? _h : existingTender.status,
                updatedAt: new Date().toISOString()
            }
        });
        res.status(200).json({
            message: "success",
            data: updatedTender
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2025") {
                res.status(404).json({
                    code: "NOT_FOUND",
                    message: "Tender not found"
                });
                return;
            }
            res.status(400).json({
                code: "DATABASE_ERROR",
                message: "Failed to update tender due to database constraints"
            });
            return;
        }
        res.status(500).json({
            message: "Something went wrong, please try again later"
        });
        return;
    }
}));
tenderRouter.get("/te/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tender = yield prisma_1.prisma.tender.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });
        if (!tender) {
            res.status(404).json({
                message: "No tender Found"
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: tender
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Could not fetch the tender, please try again later"
        });
        return;
    }
}));
tenderRouter.delete("/delete-tender/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (!id) {
            res.status(400).json({ message: "Tender Id is required" });
            return;
        }
        const tender = yield prisma_1.prisma.tender.findUnique({
            where: { id: id },
            select: { pdfKey: true, id: true, title: true, category: true }
        });
        if (!tender) {
            res.status(404).json({
                message: "Tender not found"
            });
            return;
        }
        if (tender.pdfKey !== null) {
            const deletionResult = yield (0, cloudflare_1.deleteContent)(tender.pdfKey);
            if (!(deletionResult === null || deletionResult === void 0 ? void 0 : deletionResult.success)) {
                console.warn(`Tender deletion failed for ${tender.pdfKey}:`, deletionResult.error);
            }
        }
        yield prisma_1.prisma.tender.delete({
            where: { id: id }
        });
        res.status(200).json({
            message: "Tender deleted successfully"
        });
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2025") {
                res.status(404).json({
                    message: "Tender not found" // Fixed message consistency
                });
                return;
            }
            res.status(400).json({
                message: "Database operation failed"
            });
            return;
        }
        res.status(500).json({
            message: "Something went wrong, Please try again later!"
        });
        return;
    }
}));
exports.default = tenderRouter;
