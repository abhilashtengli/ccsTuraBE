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
const cloudflare_1 = require("../services/Cloudflare/cloudflare");
const prisma_1 = require("../lib/prisma");
const prisma_2 = require("../generated/prisma");
const auth_1 = require("../middleware/auth");
const facultyRouter = express_1.default.Router();
facultyRouter.post("/add-faculty", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // console.log("Entered..");
        const body = req.body;
        // console.log("Body : ", body);
        const result = yield validation_1.facultyValidation.safeParse(body);
        if (!result.success) {
            res.json({
                message: "Invalid Input",
                error: result.error.errors,
            });
            return;
        }
        const { firstName, lastName, email, contactNumber, profileImageUrl, imageKey, designation, isHod, facultyType, cvUrl, pdfKey, socialLinks, department, } = result.data;
        const formattedSocialLinks = socialLinks && Object.keys(socialLinks).length > 0
            ? socialLinks // Only include socialLinks if it's not empty
            : undefined;
        const faculty = yield prisma_1.prisma.facultyMember.create({
            data: {
                firstName: firstName,
                lastName: lastName !== "" ? lastName : undefined,
                email: email,
                contactNumber: contactNumber !== "" ? contactNumber : undefined,
                profileImageUrl: profileImageUrl !== "" ? profileImageUrl : undefined,
                designation: designation,
                isHod: isHod,
                facultyType: facultyType,
                cvUrl: cvUrl !== "" ? cvUrl : undefined,
                socialLinks: formattedSocialLinks,
                department,
                imageKey: imageKey,
                pdfKey: pdfKey,
            },
        });
        res.status(201).send({
            message: "success",
            data: faculty,
        });
        return;
    }
    catch (err) {
        if (err instanceof prisma_2.Prisma.PrismaClientKnownRequestError) {
            if (err.code === "P2002") {
                res.status(409).json({
                    code: "CONFLICT",
                    message: "Faculty member with this email already exists",
                });
            }
            return;
        }
        res
            .status(500)
            .json({ message: "Something went wrong please try again later" });
        return;
    }
}));
facultyRouter.put("/update-faculty/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    try {
        // const user = (req as Request & { user?: any }).user;
        // if (!user) {
        //   res
        //     .status(401)
        //     .send({ message: "Please sign in to update faculty members" });
        //   return;
        // }
        const { id } = req.params;
        const body = req.body;
        // console.log("Body : ", body);
        const result = validation_1.facultyUpdateValidation.safeParse(body);
        if (!result.success) {
            // console.log("Validation error:", result.error.format());
            res.status(400).json({
                message: "Invalid Input",
                error: result.error.format(),
            });
            return;
        }
        // Check if faculty exists
        const existingFaculty = yield prisma_1.prisma.facultyMember.findUnique({
            where: { id },
        });
        if (!existingFaculty) {
            res.status(404).json({ message: "Faculty member not found" });
            return;
        }
        // Format socialLinks (only include if not empty)
        const formattedSocialLinks = result.data.socialLinks &&
            Object.keys(result.data.socialLinks).length > 0
            ? result.data.socialLinks
            : prisma_2.Prisma.JsonNull;
        // Update only provided fields
        const updatedFaculty = yield prisma_1.prisma.facultyMember.update({
            where: { id },
            data: {
                firstName: (_a = result.data.firstName) !== null && _a !== void 0 ? _a : existingFaculty.firstName,
                lastName: (_b = result.data.lastName) !== null && _b !== void 0 ? _b : existingFaculty.lastName,
                email: (_c = result.data.email) !== null && _c !== void 0 ? _c : existingFaculty.email,
                contactNumber: (_d = result.data.contactNumber) !== null && _d !== void 0 ? _d : existingFaculty.contactNumber,
                profileImageUrl: (_e = result.data.profileImageUrl) !== null && _e !== void 0 ? _e : existingFaculty.profileImageUrl,
                designation: (_f = result.data.designation) !== null && _f !== void 0 ? _f : existingFaculty.designation,
                isHod: (_g = result.data.isHod) !== null && _g !== void 0 ? _g : existingFaculty.isHod,
                facultyType: (_h = result.data.facultyType) !== null && _h !== void 0 ? _h : existingFaculty.facultyType,
                cvUrl: (_j = result.data.cvUrl) !== null && _j !== void 0 ? _j : existingFaculty.cvUrl,
                socialLinks: formattedSocialLinks !== null && formattedSocialLinks !== void 0 ? formattedSocialLinks : existingFaculty.socialLinks,
                department: (_k = result.data.department) !== null && _k !== void 0 ? _k : existingFaculty.department,
                imageKey: (_l = result.data.imageKey) !== null && _l !== void 0 ? _l : existingFaculty.imageKey,
                pdfKey: (_m = result.data.pdfKey) !== null && _m !== void 0 ? _m : existingFaculty.pdfKey,
                updatedAt: new Date().toISOString(),
            },
        });
        res.status(200).json({
            message: "success",
            data: updatedFaculty,
        });
        return;
    }
    catch (err) {
        res.status(500).json({
            message: "Failed to update : Something went wrong, please try again later",
            err,
        });
        return;
    }
}));
facultyRouter.get("/fa/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const facultyData = yield prisma_1.prisma.facultyMember.findMany();
        if (!facultyData) {
            res.status(404).json({
                message: "No Faculty data Found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: facultyData,
        });
        return;
    }
    catch (err) {
        res.status(500).json({
            message: "Could not fetch the Faculty data, please try again later",
        });
        return;
    }
}));
facultyRouter.get("/fa/nonteaching/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const facultyData = yield prisma_1.prisma.facultyMember.findMany({
            where: {
                facultyType: "Non_Teaching",
            },
        });
        if (!facultyData) {
            res.status(404).json({
                message: "No Faculty data Found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: facultyData,
        });
        return;
    }
    catch (err) {
        res.status(500).json({
            message: "Could not fetch the Faculty data, please try again later",
        });
        return;
    }
}));
facultyRouter.get("/fa/teaching/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const facultyData = yield prisma_1.prisma.facultyMember.findMany({
            where: {
                facultyType: "Teaching",
            },
        });
        if (!facultyData) {
            res.status(404).json({
                message: "No Faculty data Found",
            });
            return;
        }
        res.status(200).json({
            success: true,
            data: facultyData,
        });
        return;
    }
    catch (err) {
        res.status(500).json({
            message: "Could not fetch the Faculty data, please try again later",
        });
        return;
    }
}));
facultyRouter.delete("/delete-faculty/:id", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // console.log("Id : ", id);
    try {
        if (!id) {
            res.status(400).json({ message: "Faculty Id is required" });
            return;
        }
        const faKeys = yield prisma_1.prisma.facultyMember.findUnique({
            where: { id: id },
            select: { imageKey: true, pdfKey: true, id: true, firstName: true },
        });
        // console.log("FaKeys : ", faKeys);
        if (!faKeys) {
            console.warn(`Faculty member with id ${id} not found.`);
            return;
        }
        if (faKeys.imageKey) {
            yield attemptDelete(faKeys.imageKey, "Image");
        }
        if (faKeys.pdfKey) {
            yield attemptDelete(faKeys.pdfKey, "PDF");
        }
        yield prisma_1.prisma.facultyMember.delete({
            where: { id: id },
        });
        res.status(200).json({
            message: "Faculty member deleted successfully",
        });
        return;
    }
    catch (err) {
        // console.log(err);
        res.status(500).json({
            message: "Something went wrong, Please try again later!",
            error: err,
        });
        return;
    }
}));
exports.default = facultyRouter;
const attemptDelete = (key, label) => __awaiter(void 0, void 0, void 0, function* () {
    if (key) {
        const deletionResult = yield (0, cloudflare_1.deleteContent)(key);
        if (!(deletionResult === null || deletionResult === void 0 ? void 0 : deletionResult.success)) {
            console.warn(`${label} deletion failed for ${key}:`, deletionResult.error);
        }
    }
    else {
        console.info(`No ${label} key provided`);
    }
});
