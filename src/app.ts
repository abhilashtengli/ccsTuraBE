import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth";
import { prisma } from "./lib/prisma";
dotenv.config();

const app = express();
app.use(express.json());
app.use("/", authRouter);

app.listen(process.env.PORT, async () => {
  console.log("Server running on the port : ", process.env.PORT);
});
