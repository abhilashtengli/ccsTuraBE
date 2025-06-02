import { GalleryCategory } from "../generated/prisma";
import validator from "validator";
import { z } from "zod";
interface User {
  name: string;
  email: string;
  password: string;
}
const validCategories = [
  "Campus",
  "Events",
  "Students",
  "Faculty",
  "Sports"
] as const;

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

export const facultyValidation = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" }),
    lastName: z.string().optional(),
    email: z
      .string()
      .optional()
      .transform((val) => (val === "" ? undefined : val))
      .refine((val) => !val || z.string().email().safeParse(val).success, {
        message: "Invalid email address"
      }),
    bioSummary: z
      .string()
      .trim()
      .min(50, { message: "Bio must be at least 50 characters" })
      .max(2000, { message: "Bio can be max of 2000 characters" })
      .optional(),
    contactNumber: z
      .string()
      .transform((val) => (val === "" ? undefined : val))
      .optional()
      .refine((val) => !val || /^\d{10}$/.test(val), {
        message: "Contact number must be 10 digits"
      }),
    profileImageUrl: z
      .string()
      .optional()
      .transform((val) => (val === "" ? undefined : val))
      .refine((val) => !val || z.string().url().safeParse(val).success, {
        message: "Invalid URL format"
      }),
    imageKey: z
      .string()
      .transform((val) => (val === "" ? undefined : val))
      .optional(),
    designation: z
      .string({ message: "Designation is required" })
      .min(2, { message: "Designation cannot be empty" })
      .trim(),
    isHod: z.boolean(),
    facultyType: z.enum(["Teaching", "Non_Teaching"], {
      message: "Faculty type must be either Teaching or Non_Teaching"
    }),
    // Fix for cvUrl - allow null
    cvUrl: z
      .string()
      .nullable()
      .optional()
      .transform((val) => (val === "" ? undefined : val))
      .refine((val) => !val || z.string().url().safeParse(val).success, {
        message: "Invalid URL format"
      }),
    // Fix for pdfKey - allow null
    pdfKey: z
      .string()
      .nullable() // Allow null explicitly
      .optional(),
    bioDataUrl: z
      .string()
      .nullable()
      .optional()
      .transform((val) => (val === "" ? undefined : val))
      .refine((val) => !val || z.string().url().safeParse(val).success, {
        message: "Invalid URL format"
      }),
    bioDataKey: z.string().nullable().optional(),
    // Fix for socialLinks - allow null
    socialLinks: z
      .object({
        key: z.enum([
          "linkedin",
          "twitter",
          "instagram",
          "facebook",
          "research_gate"
        ]),
        value: z.string().url({ message: "Invalid URL format" })
      })
      .nullable() // Allow null explicitly
      .optional(),
    department: z.enum(
      [
        "Department_of_Food_Science_and_Nutrition",
        "Department_of_Basic_Science_and_Humanities",
        "Department_of_Family_Resouces_Management",
        "Department_of_Housing_Development_and_Family_Studies",
        "Department_of_Extension_Education_and_Communication_Management",
        "Department_of_Textiles_and_Apparel_Designing",
        "Multi_Technology_Testing_Centre_and_Vocational_Training_Centre",
        "Other"
      ],
      {
        message: "Invalid department"
      }
    )
  })
  // Update refinements to handle null values
  .refine((data) => !(data.cvUrl && !data.pdfKey && data.cvUrl !== null), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"]
  })
  .refine(
    (data) =>
      !(data.bioDataUrl && !data.bioDataKey && data.bioDataUrl !== null),
    {
      message: "Bio data key is required when Bio data URL is provided",
      path: ["bioDataKey"]
    }
  )
  .refine(
    (data) =>
      !(
        data.profileImageUrl &&
        !data.imageKey &&
        data.profileImageUrl !== null
      ),
    {
      message: "Image Key is required when Image URL is provided",
      path: ["imageKey"]
    }
  );

export const noticeValidation = z
  .object({
    category: z.string().min(2, { message: "Category cannot be empty" }).trim(),
    title: z.string().min(3, { message: "Title cannot be empty" }).trim(),
    pdfUrl: z.string().url({ message: "Invalid URL format" }).optional(),
    pdfKey: z
      .string()
      .min(3, { message: "Pdf key cannot be empty" })
      .trim()
      .optional(),
    isActive: z.boolean()
  })
  .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
  });

export const newsValidation = z.object({
  title: z.string().min(3, { message: "Title cannot be empty" }).trim().max(80),
  description: z
    .string()
    .min(5, { message: "Description cannot be empty" })
    .trim(),
  publishDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
    .transform((date) => new Date(date)),
  isActive: z.boolean().default(true)
});

export const advertismentValidation = z
  .object({
    title: z.string().min(3, { message: "Title cannot be empty" }).trim(),
    description: z
      .string()
      .min(5, { message: "description cannot be empty" })
      .trim()
      .optional(), // Ensures non-empty string
    department: z
      .string()
      .min(2, { message: "department cannot be empty" })
      .trim(),
    deadlineDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
      .transform((date) => new Date(date)),
    isActive: z.boolean().default(true),
    pdfUrl: z.string().url({ message: "Invalid URL format" }).optional(),
    pdfKey: z.string().min(3, { message: "PDF key cannot be empty" }).optional()
  })
  .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
  });

export const tenderValidation = z
  .object({
    title: z.string().min(2, { message: "Title cannot be empty" }).trim(),
    reference: z
      .string()
      .min(2, { message: "Reference cannot be empty" })
      .trim()
      .optional(),
    publishedDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
      .transform((date) => new Date(date)),
    closingDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
      .transform((date) => new Date(date)),
    category: z
      .string()
      .min(3, { message: "Category cannot be empty" })
      .trim()
      .optional(),
    pdfUrl: z.string().url({ message: "Invalid URL format" }).optional(),
    pdfKey: z
      .string()
      .min(2, { message: "Pdf key cannot be empty" })
      .trim()
      .optional(),
    status: z.enum(["Open", "Closed"])
  })
  .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
  });

export const staffFormValidation = z
  .object({
    title: z
      .string()
      .min(3, { message: "Title cannot be empty" })
      .max(60, { message: "Title cannot exceed 60 characters" })
      .trim(),
    formType: z
      .string()
      .min(2, { message: "Title cannot be empty" })
      .max(50, { message: "Title cannot exceed 50 characters" })
      .trim(),
    updatedDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
      .transform((date) => new Date(date)),
    pdfUrl: z.string().url({ message: "Invalid URL format" }),
    pdfKey: z.string().min(3, { message: "Pdf key cannot be empty" }).trim(),
    isActive: z.boolean().default(true)
  })
  .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
  });

export const imageValidation = z
  .object({
    imageUrl: z.string().url({ message: "Invalid URL format" }),
    imageKey: z
      .string()
      .min(3, { message: "Image key cannot be empty" })
      .trim(),
    category: z.enum(["Campus", "Events", "Students", "Faculty", "Sports"])
  })
  .refine((data) => !(data.imageUrl && !data.imageKey), {
    message: "Image key is required when Image URL is provided",
    path: ["imageKey"] // Points to the pdfKey field in error
  });

export const videoValidation = z.object({
  youtubeUrl: z.string().url({ message: "Invalid URL format" }),
  category: z.enum(validCategories),
  title: z
    .string()
    .min(3, { message: "Title cannot be empty" })
    .trim()
    .optional()
});

//---------------------------------------------------------------------------------
//Update Validations

export const advertismentUpdateValidation = z
  .object({
    title: z
      .string()
      .min(3, { message: "Title cannot be empty" })
      .trim()
      .optional(),
    description: z
      .string()
      .min(3, { message: "Description cannot be empty" })
      .trim()
      .optional(),
    department: z
      .string()
      .min(3, { message: "Department cannot be empty" })
      .trim()
      .optional(),
    deadlineDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
      .transform((date) => new Date(date))
      .optional(),
    isActive: z.boolean().optional(),
    pdfUrl: z
      .string()
      .url({ message: "Invalid URL format" })
      .nullable()
      .optional(),
    pdfKey: z
      .string()
      .min(3, { message: "Pdf key cannot be empty" })
      .trim()
      .nullable()
      .optional()
  })
  .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
  });

export const facultyUpdateValidation = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" })
      .optional(),
    lastName: z.string().optional(),
    email: z
      .string()
      .trim()
      .optional()
      .transform((val) => (val === "" ? undefined : val))
      .refine((val) => !val || z.string().email().safeParse(val).success, {
        message: "Invalid email address"
      }),
    bioSummary: z
      .string()
      .trim()
      .min(50, { message: "Bio must be at least 50 characters" })
      .max(2000, { message: "Bio can be max of 2000 characters" })
      .optional(),
    contactNumber: z
      .string()
      .transform((val) => (val === "" ? undefined : val))
      .optional()
      .refine((val) => !val || /^\d{10}$/.test(val), {
        message: "Contact number must be 10 digits"
      }),

    profileImageUrl: z
      .string()
      .nullable()
      .optional()
      .transform((val) => (val === "" ? undefined : val))
      .refine((val) => !val || z.string().url().safeParse(val).success, {
        message: "Invalid URL format"
      }),
    imageKey: z
      .string()
      .transform((val) => (val === "" ? undefined : val))
      .nullable()
      .optional(),
    bioDataUrl: z
      .string()
      .nullable()
      .optional()
      .transform((val) => (val === "" ? undefined : val))
      .refine((val) => !val || z.string().url().safeParse(val).success, {
        message: "Invalid URL format"
      }),
    bioDataKey: z
      .string()
      .transform((val) => (val === "" ? undefined : val))
      .nullable()
      .optional(),
    designation: z.string().optional(),
    isHod: z.boolean().optional(),
    facultyType: z
      .enum(["Teaching", "Non_Teaching"], {
        message: "Faculty type must be either Teaching or Non_Teaching"
      })
      .optional(),
    cvUrl: z
      .string()
      .nullable()
      .optional()
      .transform((val) => (val === "" ? undefined : val))
      .refine((val) => !val || z.string().url().safeParse(val).success, {
        message: "Invalid URL format"
      }),
    pdfKey: z
      .string()
      .nullable()
      .transform((val) => (val === "" ? undefined : val))
      .optional(),
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
      .enum(
        [
          "Department_of_Food_Science_and_Nutrition",
          "Department_of_Basic_Science_and_Humanities",
          "Department_of_Family_Resouces_Management",
          "Department_of_Housing_Development_and_Family_Studies",
          "Department_of_Extension_Education_and_Communication_Management",
          "Department_of_Textiles_and_Apparel_Designing",
          "Multi_Technology_Testing_Centre_and_Vocational_Training_Centre",
          "Other"
        ],
        {
          message: "Department is required"
        }
      )
      .optional()
  })
  .refine((data) => !(data.cvUrl && !data.pdfKey && data.cvUrl !== null), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"]
  })
  .refine(
    (data) =>
      !(data.bioDataUrl && !data.bioDataKey && data.bioDataUrl !== null),
    {
      message: "Bio data key is required when Bio data URL is provided",
      path: ["bioDataKey"]
    }
  )
  .refine(
    (data) =>
      !(
        data.profileImageUrl &&
        !data.imageKey &&
        data.profileImageUrl !== null
      ),
    {
      message: "Image Key is required when Image URL is provided",
      path: ["imageKey"]
    }
  );

export const imageUpdateValidation = z
  .object({
    imageUrl: z.string().url({ message: "Invalid URL format" }).optional(),
    imageKey: z
      .string()
      .min(3, { message: "Image Key cannot be empty" })
      .optional(),
    category: z
      .enum(["Campus", "Events", "Students", "Faculty", "Sports"])
      .optional()
  })
  .refine((data) => !(data.imageUrl && !data.imageKey), {
    message: "Image key is required when Image URL is provided",
    path: ["imageKey"] // Points to the pdfKey field in error
  });

export const videoUpdateValidation = z.object({
  youtubeUrl: z.string().url({ message: "Invalid URL format" }).optional(),
  category: z.enum(validCategories),
  title: z.string().min(3, { message: "Title cannot be empty" }).optional()
});

export const newsUpdateValidation = z.object({
  title: z.string().max(80).optional(),
  description: z
    .string()
    .min(3, { message: "Description cannot be empty" })
    .optional(),
  publishDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
    .transform((date) => new Date(date))
    .optional(),
  isActive: z.boolean().optional()
});

export const noticeUpdateValidation = z
  .object({
    category: z
      .string()
      .min(3, { message: "Category cannot be empty" })
      .optional(),
    title: z.string().min(3, { message: "Title cannot be empty" }).optional(),
    pdfUrl: z
      .string()
      .url({ message: "Invalid URL format" })
      .nullable()
      .optional(),
    pdfKey: z
      .string()
      .min(3, { message: "Key cannot be empty" })
      .nullable()
      .optional(),
    isActive: z.boolean().optional()
  })
  .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
  });

export const staffFormUpdateValidation = z
  .object({
    title: z.string().min(3, { message: "Title cannot be empty" }).optional(),
    formType: z
      .string()
      .min(2, { message: "Form type cannot be empty" })
      .optional(),
    updatedDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
      .transform((date) => new Date(date))
      .optional(),
    pdfUrl: z
      .string()
      .url({ message: "Invalid URL format" })
      .nullable()
      .optional(),
    pdfKey: z
      .string()
      .min(3, { message: "Key cannot be empty" })
      .nullable()
      .optional(),
    isActive: z.boolean().optional()
  })
  .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
  });

export const tenderUpdateValidation = z
  .object({
    title: z.string().min(3, { message: "Title cannot be empty" }).optional(),
    reference: z
      .string()
      .min(3, { message: "Reference cannot be empty" })
      .optional(),
    publishedDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
      .transform((date) => new Date(date))
      .optional(),
    closingDate: z
      .string()
      .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
      .transform((date) => new Date(date))
      .optional(),
    category: z
      .string()
      .min(3, { message: "Category cannot be empty" })
      .optional(),
    pdfUrl: z
      .string()
      .url({ message: "Invalid URL format" })
      .nullable()
      .optional(),
    pdfKey: z
      .string()
      .min(3, { message: "Key cannot be empty" })
      .nullable()
      .optional(),
    status: z.enum(["Open", "Closed"]).optional()
  })
  .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
  });
