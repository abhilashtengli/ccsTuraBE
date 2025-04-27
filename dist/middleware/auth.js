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
exports.userAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const prisma_1 = require("../lib/prisma");
dotenv_1.default.config();
const userAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const token = ((_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token) || ((_b = req.headers.authorization) === null || _b === void 0 ? void 0 : _b.split(" ")[1]);
        // console.log("Token : ", token);
        if (!token) {
            res.status(401).json({
                message: "Invalid token or missing authentication"
            });
            return;
        }
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            res.send(500).json({ message: "Internal server error" });
            return;
        }
        const decodeObj = (yield jsonwebtoken_1.default.verify(token, secret));
        const { id } = decodeObj;
        const user = yield prisma_1.prisma.user.findUnique({
            where: { id },
            select: { id: true, email: true, name: true }
        });
        // console.log("User : ", user)
        if (!user) {
            res.status(404).json({ message: "User not Found" });
            return;
        }
        req.user = user || null;
        next();
    }
    catch (err) {
        res.status(400).send("ERROR : " + err);
    }
});
exports.userAuth = userAuth;
