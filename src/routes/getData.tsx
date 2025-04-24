import express, { Request, Response } from "express";
import { prisma } from "../lib/prisma";

const getDataRouter = express.Router();

getDataRouter.get("/get-all-data", async (req: Request, res: Response) => {
  try {
    // Get advertisements
    const advertisements = await prisma.advertisement.findMany({
      orderBy: {
        createdAt: "desc"
      },
      take: 2,
      select: {
        title: true,
        isActive: true
      }
    });

    // Get news updates
    const newsUpdates = await prisma.newsUpdate.findMany({
      orderBy: {
        createdAt: "desc"
      },
      take: 2,
      select: {
        title: true,
        isActive: true
      }
    });

    // Get staff forms
    const staffForms = await prisma.staffForm.findMany({
      orderBy: {
        createdAt: "desc"
      },
      take: 2,
      select: {
        title: true,
        isActive: true
      }
    });

    // Get tenders
    const tenders = await prisma.tender.findMany({
      orderBy: {
        createdAt: "desc"
      },
      take: 2,
      select: {
        title: true,
        status: true
      }
    });

    // Return all data in a single object
    res.status(200).json({
      success: true,
      data: {
        advertisements,
        newsUpdates,
        staffForms,
        tenders
      }
    });
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({
      success: false,
      message: "Could not fetch the data, please try again later"
    });
  }
});

export default getDataRouter;
