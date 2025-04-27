"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class TokenService {
    static generateToken(payload) {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error("JWT_SECRET is not configured in environment variables");
        }
        const token = jsonwebtoken_1.default.sign({ id: payload.id, iat: Math.floor(Date.now() / 1000) }, secret, { expiresIn: this.token_expiry });
        return token;
    }
}
TokenService.token_expiry = "12h";
exports.default = TokenService;
