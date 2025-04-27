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
const prisma_1 = require("../lib/prisma");
const getDataRouter = express_1.default.Router();
getDataRouter.get("/get-all-data", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get advertisements
        const advertisements = yield prisma_1.prisma.advertisement.findMany({
            orderBy: {
                createdAt: "desc"
            },
            take: 2,
            select: {
                title: true,
                isActive: true
            }
        });
        // Get news updates
        const newsUpdates = yield prisma_1.prisma.newsUpdate.findMany({
            orderBy: {
                createdAt: "desc"
            },
            take: 2,
            select: {
                title: true,
                isActive: true
            }
        });
        // Get staff forms
        const staffForms = yield prisma_1.prisma.staffForm.findMany({
            orderBy: {
                createdAt: "desc"
            },
            take: 2,
            select: {
                title: true,
                isActive: true
            }
        });
        // Get tenders
        const tenders = yield prisma_1.prisma.tender.findMany({
            orderBy: {
                createdAt: "desc"
            },
            take: 2,
            select: {
                title: true,
                status: true
            }
        });
        // Return all data in a single object
        res.status(200).json({
            success: true,
            data: {
                advertisements,
                newsUpdates,
                staffForms,
                tenders
            }
        });
    }
    catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).json({
            success: false,
            message: "Could not fetch the data, please try again later"
        });
    }
}));
exports.default = getDataRouter;
