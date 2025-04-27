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
const cloudflare_1 = require("../services/Cloudflare/cloudflare");
const auth_1 = require("../middleware/auth");
const signedUrlRouter = express_1.default.Router();
signedUrlRouter.post("/getSigned-url", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fileName, contentType } = req.body;
    const { signedUrl, key, publicUrl } = yield (0, cloudflare_1.generatePresignedUrl)(fileName, contentType);
    res.json({ signedUrl, publicUrl, key });
    return;
}));
exports.default = signedUrlRouter;
