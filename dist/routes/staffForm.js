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
const staffFormRouter = express_1.default.Router();
staffFormRouter.post("/add-staff-form", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const result = validation_1.staffFormValidation.safeParse(body);
        if (!result.success) {
            res.json({
                message: "Invalid Input",
                error: result.error.errors,
            });
            return;
        }
        const { title, formType, updatedDate, pdfUrl, pdfKey, isActive } = result.data;
        const staffForm = yield prisma_1.prisma.staffForm.create({
            data: {
                title: title,
                formType: formType,
                updatedDate: updatedDate,
                pdfUrl: pdfUrl,
                pdfKey: pdfKey,
                isActive: isActive,
            },
        });
        res.status(201).json({
            message: "success",
            data: staffForm,
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            res.status(400).json({
                code: "DATABASE_ERROR",
                message: "Failed to create Staff form due to database constraints",
            });
            return;
        }
        res.status(500).json({
            message: "Something went wrong, please try again later",
        });
        return;
    }
}));
staffFormRouter.put("/update-staff-form/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    try {
        const { id } = req.params;
        const body = req.body;
        const result = validation_1.staffFormUpdateValidation.safeParse(body);
        if (!result.success) {
            res.status(400).json({
                message: "Invalid Input",
                error: result.error.errors,
            });
            return;
        }
        // Check if form exists
        const existingForm = yield prisma_1.prisma.staffForm.findUnique({
            where: { id },
        });
        if (!existingForm) {
            res.status(404).json({
                message: "Staff form not found",
            });
            return;
        }
        // Update only provided fields
        const updatedForm = yield prisma_1.prisma.staffForm.update({
            where: { id },
            data: {
                title: (_a = result.data.title) !== null && _a !== void 0 ? _a : existingForm.title,
                formType: (_b = result.data.formType) !== null && _b !== void 0 ? _b : existingForm.formType,
                updatedDate: (_c = result.data.updatedDate) !== null && _c !== void 0 ? _c : existingForm.updatedDate,
                pdfUrl: (_d = result.data.pdfUrl) !== null && _d !== void 0 ? _d : existingForm.pdfUrl,
                pdfKey: (_e = result.data.pdfKey) !== null && _e !== void 0 ? _e : existingForm.pdfKey,
                isActive: (_f = result.data.isActive) !== null && _f !== void 0 ? _f : existingForm.isActive,
                updatedAt: new Date().toISOString(),
            },
        });
        res.status(200).json({
            message: "success",
            data: updatedForm,
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2025") {
                res.status(404).json({
                    code: "NOT_FOUND",
                    message: "Staff form not found",
                });
                return;
            }
            res.status(400).json({
                code: "DATABASE_ERROR",
                message: "Failed to update staff form due to database constraints",
            });
            return;
        }
        res.status(500).json({
            message: "Something went wrong, please try again later",
        });
        return;
    }
}));
staffFormRouter.get("/st/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const staffForm = yield prisma_1.prisma.staffForm.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        if (!staffForm) {
            res.status(404).json({
                message: "No Staff form Found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: staffForm,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Could not fetch the Staff forms, please try again later",
        });
        return;
    }
}));
staffFormRouter.delete("/delete-staff-form/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        if (!id) {
            res.status(400).json({ message: "Staff form Id is required" });
            return;
        }
        const staffForm = yield prisma_1.prisma.staffForm.findUnique({
            where: { id: id },
            select: { pdfKey: true, id: true, title: true, formType: true },
        });
        if (!staffForm) {
            res.status(404).json({
                message: "Staff form not found",
            });
            return;
        }
        if (staffForm.pdfKey !== null) {
            const deletionResult = yield (0, cloudflare_1.deleteContent)(staffForm.pdfKey);
            if (!(deletionResult === null || deletionResult === void 0 ? void 0 : deletionResult.success)) {
                console.warn(`Staff form deletion failed for ${staffForm.pdfKey}:`, deletionResult.error);
            }
        }
        yield prisma_1.prisma.staffForm.delete({
            where: { id: id },
        });
        res.status(200).json({
            message: "Staff form deleted successfully",
        });
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2025") {
                res.status(404).json({
                    message: "Staff form not found", // Fixed message consistency
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
exports.default = staffFormRouter;
