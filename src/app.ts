import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth";
import { prisma } from "./lib/prisma";
import facultyRouter from "./routes/faculty";
import noticeRouter from "./routes/notice";
import signedUrlRouter from "./routes/signedUrl";
import advertismentRouter from "./routes/advertisment";
import imageRouter from "./routes/galleryImage";
import videoRouter from "./routes/galleryVideo";
import newsRouter from "./routes/newupdate";
import staffFormRouter from "./routes/staffForm";
import tenderRouter from "./routes/tender";
import cookieParser from "cookie-parser";
import cors from "cors";
import cloudflareRouter from "./routes/cloudflare";
import getDataRouter from "./routes/getData";
dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/", authRouter);
app.use("/", cloudflareRouter);
app.use("/", facultyRouter);
app.use("/", noticeRouter);
app.use("/", signedUrlRouter);
app.use("/", advertismentRouter);
app.use("/", imageRouter);
app.use("/", videoRouter);
app.use("/", newsRouter);
app.use("/", getDataRouter);
app.use("/", staffFormRouter);
app.use("/", tenderRouter);
app.listen(process.env.PORT, async () => {
  // console.log("Server running on the port : ", process.env.PORT);
});
