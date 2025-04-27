"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificationEmail = void 0;
const React = __importStar(require("react"));
const VerificationEmail = ({ name, code, serviceFor }) => (React.createElement("div", { style: {
        fontFamily: "Helvetica, Arial, sans-serif",
        backgroundColor: "#f9f9f9",
        padding: "40px 20px",
        color: "#333"
    } },
    React.createElement("div", { style: {
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
        } },
        React.createElement("h2", { style: { color: "#2c3e50", marginBottom: "10px" } }, serviceFor === "emailService"
            ? "Verify your email address"
            : "Reset your password"),
        React.createElement("p", { style: { fontSize: "16px", margin: "10px 0" } },
            "Hello ",
            React.createElement("strong", null, name),
            ","),
        React.createElement("p", { style: { fontSize: "16px", margin: "10px 0" } }, serviceFor === "emailService"
            ? "Use the following verification code to complete your sign up:"
            : "Use the following verification code to reset your password:"),
        React.createElement("div", { style: {
                fontSize: "32px",
                fontWeight: "bold",
                letterSpacing: "4px",
                color: "#007bff",
                margin: "20px 0",
                textAlign: "center"
            } }, code),
        React.createElement("p", { style: { fontSize: "14px", color: "#888", margin: "10px 0" } },
            "This code is valid for ",
            React.createElement("strong", null, "5 minutes"),
            "."),
        React.createElement("p", { style: { fontSize: "14px", color: "#888", margin: "10px 0" } }, "If you did not request this, you can safely ignore this email."))));
exports.VerificationEmail = VerificationEmail;
