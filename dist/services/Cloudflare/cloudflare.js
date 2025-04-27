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
exports.deleteContent = exports.getPublicUrl = exports.generatePresignedUrl = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const uuid_1 = require("uuid");
const s3 = new client_s3_1.S3Client({
    region: "auto",
    endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY,
        secretAccessKey: process.env.CLOUDFLARE_SECRET_KEY,
    },
});
const generatePresignedUrl = (fileName, contentType) => __awaiter(void 0, void 0, void 0, function* () {
    const uniqueFileName = `${(0, uuid_1.v4)()}-${Date.now()}-${fileName}`;
    const key = `ccstura/${uniqueFileName}`;
    // console.log("KEY : ", key);
    const command = new client_s3_1.PutObjectCommand({
        Bucket: process.env.CLOUDFLARE_BUCKET_NAME,
        Key: key,
        ContentType: contentType,
    });
    const signedUrl = yield (0, s3_request_presigner_1.getSignedUrl)(s3, command, { expiresIn: 600 }); // 1 hour expiry
    return {
        signedUrl,
        key,
        publicUrl: (0, exports.getPublicUrl)(key),
    };
});
exports.generatePresignedUrl = generatePresignedUrl;
const getPublicUrl = (key) => {
    //   return `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com/${process.env.CLOUDFLARE_BUCKET_NAME}/${key}`;
    return `https://${process.env.PUBLIC_URL}/${key}`;
};
exports.getPublicUrl = getPublicUrl;
const deleteContent = (key) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteCommand = new client_s3_1.DeleteObjectCommand({
            Bucket: process.env.CLOUDFLARE_BUCKET_NAME,
            Key: key,
        });
        yield s3.send(deleteCommand);
        return { success: true };
    }
    catch (err) {
        if (err instanceof client_s3_1.S3ServiceException) {
            // Handle specific S3 errors
            if (err.name === "NoSuchKey") {
                return { success: true }; // Treat missing file as success
            }
            return {
                success: false,
                error: "Failed to delete content from storage",
                err,
            };
        }
        return {
            success: false,
            error: "Unexpected error during deletion",
        };
    }
});
exports.deleteContent = deleteContent;
