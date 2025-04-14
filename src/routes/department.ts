// import express, { Request, Response } from "express";
// import authRouter from "./auth";
// import { z } from "zod";
// const departmentRouter = express.Router();
// const departmentValidation = z.object({
//   name: z.string().min(2),
//   description: z.string()
// });
// departmentRouter.post(
//   "/department",
//   authRouter,
//   async (req: Request, res: Response) => {
//     try {
//       const body = req.body;

//       const validateDepartment = departmentValidation.safeParse(body);
//       const loggedInUser = req.user;
//     } catch (err) {}
//   }
// );
