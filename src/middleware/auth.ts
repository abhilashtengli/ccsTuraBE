import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { prisma } from "../lib/prisma";
dotenv.config();

interface JwtPayload {
  id: string;
}

export const userAuth = async (req: Request, res: Response, next: any) => {
  try {
    const cookie = req.cookies;
    const { token } = cookie;

    if (!token) {
      res.status(401).json({
        message: "Invalid token or missing authentication"
      });
      return;
    }
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      res.send(500).json({ message: "Internal server error" });
      return;
    }

    const decodeObj = (await jwt.verify(token, secret)) as JwtPayload;

    const { id } = decodeObj;
    const user = await prisma.user.findUnique({
      where: { id },
      select: { id: true, email: true, name: true }
    });
    if (!user) {
      res.status(404).json({ message: "User not Found" });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send("ERROR : " + err);
  }
};
