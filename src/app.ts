import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth";
import { prisma } from "./lib/prisma";
import facultyRouter from "./routes/faculty";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/", authRouter);
app.use("/", facultyRouter);

app.listen(process.env.PORT, async () => {
  console.log("Server running on the port : ", process.env.PORT);
});


// {
//     "signedUrl": "https://ccstura.65669ae262da2b2b43d3eb6899efcebd.r2.cloudflarestorage.com/ccstura/f0591555-7f22-487b-aa1d-5d57bf3001b6-1744623479622-InstaImage1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=3ca484ba2fdeae91673bd0207e756efe%2F20250414%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20250414T093759Z&X-Amz-Expires=3600&X-Amz-Signature=13ddc43526be5d7e5088e4f45597252d7c976b0c037a2f925d27b7369800129c&X-Amz-SignedHeaders=host&x-amz-checksum-crc32=AAAAAA%3D%3D&x-amz-sdk-checksum-algorithm=CRC32&x-id=PutObject",
//     "key": "ccstura/f0591555-7f22-487b-aa1d-5d57bf3001b6-1744623479622-InstaImage1.png",
//     "publicUrl": "https://65669ae262da2b2b43d3eb6899efcebd.r2.cloudflarestorage.com/ccstura/ccstura/f0591555-7f22-487b-aa1d-5d57bf3001b6-1744623479622-InstaImage1.png"
// }