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
const cloudflareRouter = express_1.default.Router();
cloudflareRouter.delete("/delete-file", auth_1.userAuth, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { key } = req.body; // Notice req.params[0] here
    // console.log("Key received:", key);
    const deletionResult = yield (0, cloudflare_1.deleteContent)(key);
    if (!deletionResult.success) {
        res.status(500).json({
            message: "Something went wrong",
            error: deletionResult.error
        });
        return;
    }
    res.status(200).json({
        message: "Delete successful",
        success: deletionResult.success
    });
}));
exports.default = cloudflareRouter;
