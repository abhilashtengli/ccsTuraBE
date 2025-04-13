import { User } from "generated/prisma"; // Import your Prisma User type

interface UserData {
  id: string;
  name: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserData | null; // Only include fields you need
    }
  }
}
