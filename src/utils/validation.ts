import validator from "validator";
import { z } from "zod";
interface User {
  name: string;
  email: string;
  password: string;
}
export const signupValidation = (req: { body: User }) => {
  const { name, email, password } = req.body;
  if (!name) {
    throw new Error("Invalid first name or last name");
  } else if (!validator.isEmail(email)) {
    throw new Error("Invalid email address");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Enter a strong password");
  }
};

export const facultyValidation = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().optional(),
  email: z.string().email({ message: "Invalid email address" }),
  contactNumber: z
    .string()
    .min(10, { message: "Contact number must be 10 digits" })
    .max(10, { message: "Contact number must be 10 digits" }),
  profileImageUrl: z
    .string({ message: "Profile image is required" })
    .optional(),
  imageKey: z.string().optional(),
  designation: z.string({ message: "Designation is required" }),
  isHod: z.boolean(),
  facultyType: z.enum(["Teaching", "Non_Teaching"], {
    message: "Faculty type must be either Teaching or Non_Teaching"
  }),
  cvUrl: z.string().optional(),
  pdfKey: z.string().optional(),
  socialLinks: z
    .object({
      key: z.enum([
        "linkedin",
        "twitter",
        "instagram",
        "facebook",
        "research_gate"
      ]),
      value: z.string().url()
    })
    .optional(),
  department: z.enum(["dept_a", "dept_b", "dept_c", "dept_d"], {
    message: "Department is required"
  })
});

export const noticeValidation = z.object({
  category: z.string(),
  title: z.string(),
  pdfUrl: z.string().optional(),
  pdfKey: z.string().optional(),
  isActive: z.boolean()
});

export const newsValidation = z.object({
  title: z.string().max(80),
  description: z.string(),
  publishDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
  isActive: z.boolean().default(true)
  // publishDate: z.coerce.date(),
});

export const advertismentValidation = z.object({
  title: z.string(),
  description: z.string().optional(),
  department: z.string(),
  deadlineDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
  isActive: z.boolean().default(true),
  pdfUrl: z.string().optional(),
  pdfKey: z.string().optional()
});

export const tenderValidation = z.object({
  title: z.string(),
  reference: z.string().optional(),
  publishedDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
  closingDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
  category: z.string().optional(),
  pdfUrl: z.string().optional(),
  pdfKey: z.string().optional(),
  status: z.enum(["Open", "Closed"])
});

export const staffFormValidation = z.object({
  title: z.string(),
  formType: z.string(),
  updatedDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
  pdfUrl: z.string(),
  pdfKey: z.string(),
  isActive: z.boolean().default(true)
});

export const imageValidation = z.object({
  imageUrl: z.string(),
  imageKey: z.string(),
  category: z.enum(["Campus", "Events", "Students", "Faculty", "Sports"])
});

export const videoValidation = z.object({
  youtubeUrl: z.string(),
  youtubeKey: z.string(),
  category: z.string(),
  title: z.string().optional()
});

//---------------------------------------------------------------------------------
//Update Validations

export const advertismentUpdateValidation = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  department: z.string().optional(),
  deadlineDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
    .optional(),
  isActive: z.boolean().optional(),
  pdfUrl: z.string().optional(),
  pdfKey: z.string().optional()
});

export const facultyUpdateValidation = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .optional(),
  lastName: z.string().optional(),
  email: z.string().email({ message: "Invalid email address" }).optional(),
  contactNumber: z
    .string()
    .min(10, { message: "Contact number must be 10 digits" })
    .max(10, { message: "Contact number must be 10 digits" })
    .optional(),
  profileImageUrl: z.string().optional(),
  imageKey: z.string().optional(),
  designation: z.string().optional(),
  isHod: z.boolean().optional(),
  facultyType: z
    .enum(["Teaching", "Non_Teaching"], {
      message: "Faculty type must be either Teaching or Non_Teaching"
    })
    .optional(),
  cvUrl: z.string().optional(),
  pdfKey: z.string().optional(),
  socialLinks: z
    .object({
      key: z.enum([
        "linkedin",
        "twitter",
        "instagram",
        "facebook",
        "research_gate"
      ]),
      value: z.string().url()
    })
    .optional(),
  department: z
    .enum(["dept_a", "dept_b", "dept_c", "dept_d"], {
      message: "Department is required"
    })
    .optional()
});

export const imageUpdateValidation = z.object({
  imageUrl: z.string().optional(),
  imageKey: z.string().optional(),
  category: z
    .enum(["Campus", "Events", "Students", "Faculty", "Sports"])
    .optional()
});

export const videoUpdateValidation = z.object({
  youtubeUrl: z.string().optional(),
  youtubeKey: z.string().optional(),
  category: z.string().optional(),
  title: z.string().optional()
});

export const newsUpdateValidation = z.object({
  title: z.string().max(80).optional(),
  description: z.string().optional(),
  publishDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
    .optional(),
  isActive: z.boolean().optional()
});

export const noticeUpdateValidation = z.object({
  category: z.string().optional(),
  title: z.string().optional(),
  pdfUrl: z.string().optional(),
  pdfKey: z.string().optional(),
  isActive: z.boolean().optional()
});

export const staffFormUpdateValidation = z.object({
  title: z.string().optional(),
  formType: z.string().optional(),
  updatedDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
    .optional(),
  pdfUrl: z.string().optional(),
  pdfKey: z.string().optional(),
  isActive: z.boolean().optional()
});

export const tenderUpdateValidation = z.object({
  title: z.string().optional(),
  reference: z.string().optional(),
  publishedDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
    .optional(),
  closingDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
    .optional(),
  category: z.string().optional(),
  pdfUrl: z.string().optional(),
  pdfKey: z.string().optional(),
  status: z.enum(["Open", "Closed"]).optional()
});
