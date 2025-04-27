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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendVerification = void 0;
const VerificationEmail_1 = require("../../emails/VerificationEmail");
const resend_1 = require("../../lib/resend");
const SendVerification = (email, name, verifyCode, serviceFor) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield resend_1.resend.emails.send({
            from: serviceFor === "emailService"
                ? "CCSTura  <no-reply@searchyourworkflow.com>"
                : "CCSTura : Reset your password <no-reply@searchyourworkflow.com>",
            to: [email],
            subject: serviceFor === "emailService"
                ? "CCSTura: Verify your email address"
                : "CCSTura: Your Password Reset Code",
            react: (0, VerificationEmail_1.VerificationEmail)({ name, code: verifyCode, serviceFor }),
        });
        // Optional: Log/send response for monitoring
        if (response.error) {
            throw new Error(response.error.message);
        }
        return {
            success: true,
            status: 200,
            message: serviceFor === "emailService"
                ? "Verification email sent successfully"
                : "Verfication code sent to you",
        };
    }
    catch (error) {
        // Log detailed error for internal monitoring
        console.error("Email sending failed:", error);
        return {
            success: false,
            status: 500,
            message: "Failed to send verification email",
        };
    }
});
exports.SendVerification = SendVerification;
