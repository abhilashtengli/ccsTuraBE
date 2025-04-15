import express, { Request, Response } from "express";
import authRouter from "./auth";
import { noticeValidation } from "../utils/validation";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
const newsRouter = express.Router();