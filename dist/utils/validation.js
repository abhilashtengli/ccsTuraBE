"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenderUpdateValidation = exports.staffFormUpdateValidation = exports.noticeUpdateValidation = exports.newsUpdateValidation = exports.videoUpdateValidation = exports.imageUpdateValidation = exports.facultyUpdateValidation = exports.advertismentUpdateValidation = exports.videoValidation = exports.imageValidation = exports.staffFormValidation = exports.tenderValidation = exports.advertismentValidation = exports.newsValidation = exports.noticeValidation = exports.facultyValidation = exports.signupValidation = void 0;
const validator_1 = __importDefault(require("validator"));
const zod_1 = require("zod");
const signupValidation = (req) => {
    const { name, email, password } = req.body;
    if (!name) {
        throw new Error("Invalid first name or last name");
    }
    else if (!validator_1.default.isEmail(email)) {
        throw new Error("Invalid email address");
    }
    else if (!validator_1.default.isStrongPassword(password)) {
        throw new Error("Enter a strong password");
    }
};
exports.signupValidation = signupValidation;
exports.facultyValidation = zod_1.z
    .object({
    firstName: zod_1.z
        .string()
        .min(2, { message: "First name must be at least 2 characters" }),
    lastName: zod_1.z.string().optional(),
    email: zod_1.z.string().email({ message: "Invalid email address" }),
    contactNumber: zod_1.z
        .string()
        .transform((val) => (val === "" ? undefined : val))
        .optional()
        .refine((val) => !val || /^\d{10}$/.test(val), {
        message: "Contact number must be 10 digits"
    }),
    profileImageUrl: zod_1.z
        .string()
        .optional()
        .transform((val) => (val === "" ? undefined : val))
        .refine((val) => !val || zod_1.z.string().url().safeParse(val).success, {
        message: "Invalid URL format"
    }),
    imageKey: zod_1.z
        .string()
        .transform((val) => (val === "" ? undefined : val))
        .optional(),
    designation: zod_1.z
        .string({ message: "Designation is required" })
        .min(2, { message: "Designation cannot be empty" })
        .trim(),
    isHod: zod_1.z.boolean(),
    facultyType: zod_1.z.enum(["Teaching", "Non_Teaching"], {
        message: "Faculty type must be either Teaching or Non_Teaching"
    }),
    // Fix for cvUrl - allow null
    cvUrl: zod_1.z
        .string()
        .nullable() // Allow null explicitly
        .optional(),
    // Fix for pdfKey - allow null
    pdfKey: zod_1.z
        .string()
        .nullable() // Allow null explicitly
        .optional(),
    // Fix for socialLinks - allow null
    socialLinks: zod_1.z
        .object({
        key: zod_1.z.enum([
            "linkedin",
            "twitter",
            "instagram",
            "facebook",
            "research_gate"
        ]),
        value: zod_1.z.string().url({ message: "Invalid URL format" })
    })
        .nullable() // Allow null explicitly
        .optional(),
    department: zod_1.z.enum([
        "Department_of_Food_Science_and_Nutrition",
        "Department_of_Basic_Science_and_Humanities",
        "Department_of_Family_Resouces_Management",
        "Department_of_Housing_Development_and_Family_Studies",
        "Department_of_Extension_Education_and_Communication_Management",
        "Department_of_Textiles_and_Apparel_Designing",
        "Multi_Technology_Testing_Centre_and_Vocational_Training_Centre",
        "Other"
    ], {
        message: "Invalid department"
    })
})
    // Update refinements to handle null values
    .refine((data) => !(data.cvUrl && !data.pdfKey && data.cvUrl !== null), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"]
})
    .refine((data) => !(data.profileImageUrl &&
    !data.imageKey &&
    data.profileImageUrl !== null), {
    message: "Image Key is required when Image URL is provided",
    path: ["imageKey"]
});
exports.noticeValidation = zod_1.z
    .object({
    category: zod_1.z.string().min(2, { message: "Category cannot be empty" }).trim(),
    title: zod_1.z.string().min(3, { message: "Title cannot be empty" }).trim(),
    pdfUrl: zod_1.z.string().url({ message: "Invalid URL format" }).optional(),
    pdfKey: zod_1.z
        .string()
        .min(3, { message: "Pdf key cannot be empty" })
        .trim()
        .optional(),
    isActive: zod_1.z.boolean()
})
    .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
});
exports.newsValidation = zod_1.z.object({
    title: zod_1.z.string().min(3, { message: "Title cannot be empty" }).trim().max(80),
    description: zod_1.z
        .string()
        .min(5, { message: "Description cannot be empty" })
        .trim(),
    publishDate: zod_1.z
        .string()
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
        .transform((date) => new Date(date)),
    isActive: zod_1.z.boolean().default(true)
});
exports.advertismentValidation = zod_1.z
    .object({
    title: zod_1.z.string().min(3, { message: "Title cannot be empty" }).trim(),
    description: zod_1.z
        .string()
        .min(5, { message: "description cannot be empty" })
        .trim()
        .optional(), // Ensures non-empty string
    department: zod_1.z
        .string()
        .min(2, { message: "department cannot be empty" })
        .trim(),
    deadlineDate: zod_1.z
        .string()
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
        .transform((date) => new Date(date)),
    isActive: zod_1.z.boolean().default(true),
    pdfUrl: zod_1.z.string().url({ message: "Invalid URL format" }).optional(),
    pdfKey: zod_1.z.string().min(3, { message: "PDF key cannot be empty" }).optional()
})
    .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
});
exports.tenderValidation = zod_1.z
    .object({
    title: zod_1.z.string().min(2, { message: "Title cannot be empty" }).trim(),
    reference: zod_1.z
        .string()
        .min(2, { message: "Reference cannot be empty" })
        .trim()
        .optional(),
    publishedDate: zod_1.z
        .string()
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
        .transform((date) => new Date(date)),
    closingDate: zod_1.z
        .string()
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
        .transform((date) => new Date(date)),
    category: zod_1.z
        .string()
        .min(3, { message: "Category cannot be empty" })
        .trim()
        .optional(),
    pdfUrl: zod_1.z.string().url({ message: "Invalid URL format" }).optional(),
    pdfKey: zod_1.z
        .string()
        .min(2, { message: "Pdf key cannot be empty" })
        .trim()
        .optional(),
    status: zod_1.z.enum(["Open", "Closed"])
})
    .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
});
exports.staffFormValidation = zod_1.z
    .object({
    title: zod_1.z.string().min(3, { message: "Title cannot be empty" }).trim(),
    formType: zod_1.z.string().min(2, { message: "Title cannot be empty" }).trim(),
    updatedDate: zod_1.z
        .string()
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
        .transform((date) => new Date(date)),
    pdfUrl: zod_1.z.string().url({ message: "Invalid URL format" }),
    pdfKey: zod_1.z.string().min(3, { message: "Pdf key cannot be empty" }).trim(),
    isActive: zod_1.z.boolean().default(true)
})
    .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
});
exports.imageValidation = zod_1.z
    .object({
    imageUrl: zod_1.z.string().url({ message: "Invalid URL format" }),
    imageKey: zod_1.z
        .string()
        .min(3, { message: "Image key cannot be empty" })
        .trim(),
    category: zod_1.z.enum(["Campus", "Events", "Students", "Faculty", "Sports"])
})
    .refine((data) => !(data.imageUrl && !data.imageKey), {
    message: "Image key is required when Image URL is provided",
    path: ["imageKey"] // Points to the pdfKey field in error
});
exports.videoValidation = zod_1.z.object({
    youtubeUrl: zod_1.z.string().url({ message: "Invalid URL format" }),
    category: zod_1.z.enum(["Campus", "Events", "Students", "Faculty", "Sports"]),
    title: zod_1.z
        .string()
        .min(3, { message: "Title cannot be empty" })
        .trim()
        .optional()
});
//---------------------------------------------------------------------------------
//Update Validations
exports.advertismentUpdateValidation = zod_1.z
    .object({
    title: zod_1.z
        .string()
        .min(3, { message: "Title cannot be empty" })
        .trim()
        .optional(),
    description: zod_1.z
        .string()
        .min(3, { message: "Description cannot be empty" })
        .trim()
        .optional(),
    department: zod_1.z
        .string()
        .min(3, { message: "Department cannot be empty" })
        .trim()
        .optional(),
    deadlineDate: zod_1.z
        .string()
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
        .transform((date) => new Date(date))
        .optional(),
    isActive: zod_1.z.boolean().optional(),
    pdfUrl: zod_1.z.string().url({ message: "Invalid URL format" }).optional(),
    pdfKey: zod_1.z
        .string()
        .min(3, { message: "Pdf key cannot be empty" })
        .trim()
        .optional()
})
    .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
});
exports.facultyUpdateValidation = zod_1.z
    .object({
    firstName: zod_1.z
        .string()
        .min(2, { message: "First name must be at least 2 characters" })
        .optional(),
    lastName: zod_1.z.string().optional(),
    email: zod_1.z.string().email({ message: "Invalid email address" }).optional(),
    contactNumber: zod_1.z
        .string()
        .transform((val) => (val === "" ? undefined : val))
        .optional()
        .refine((val) => !val || /^\d{10}$/.test(val), {
        message: "Contact number must be 10 digits"
    }),
    profileImageUrl: zod_1.z
        .string()
        .optional()
        .transform((val) => (val === "" ? undefined : val))
        .refine((val) => !val || zod_1.z.string().url().safeParse(val).success, {
        message: "Invalid URL format"
    }),
    imageKey: zod_1.z
        .string()
        .transform((val) => (val === "" ? undefined : val))
        .optional()
        .optional(),
    designation: zod_1.z.string().optional(),
    isHod: zod_1.z.boolean().optional(),
    facultyType: zod_1.z
        .enum(["Teaching", "Non_Teaching"], {
        message: "Faculty type must be either Teaching or Non_Teaching"
    })
        .optional(),
    cvUrl: zod_1.z
        .string()
        .optional()
        .transform((val) => (val === "" ? undefined : val))
        .refine((val) => !val || zod_1.z.string().url().safeParse(val).success, {
        message: "Invalid URL format"
    }),
    pdfKey: zod_1.z
        .string()
        .transform((val) => (val === "" ? undefined : val))
        .optional(),
    socialLinks: zod_1.z
        .object({
        key: zod_1.z.enum([
            "linkedin",
            "twitter",
            "instagram",
            "facebook",
            "research_gate"
        ]),
        value: zod_1.z.string().url()
    })
        .optional(),
    department: zod_1.z
        .enum([
        "Department_of_Food_Science_and_Nutrition",
        "Department_of_Basic_Science_and_Humanities",
        "Department_of_Family_Resouces_Management",
        "Department_of_Housing_Development_and_Family_Studies",
        "Department_of_Extension_Education_and_Communication_Management",
        "Department_of_Textiles_and_Apparel_Designing",
        "Multi_Technology_Testing_Centre_and_Vocational_Training_Centre",
        "Other"
    ], {
        message: "Department is required"
    })
        .optional()
})
    .refine((data) => !(data.cvUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
});
exports.imageUpdateValidation = zod_1.z
    .object({
    imageUrl: zod_1.z.string().url({ message: "Invalid URL format" }).optional(),
    imageKey: zod_1.z
        .string()
        .min(3, { message: "Image Key cannot be empty" })
        .optional(),
    category: zod_1.z
        .enum(["Campus", "Events", "Students", "Faculty", "Sports"])
        .optional()
})
    .refine((data) => !(data.imageUrl && !data.imageKey), {
    message: "Image key is required when Image URL is provided",
    path: ["imageKey"] // Points to the pdfKey field in error
});
exports.videoUpdateValidation = zod_1.z.object({
    youtubeUrl: zod_1.z.string().url({ message: "Invalid URL format" }).optional(),
    category: zod_1.z.enum(["Campus", "Events", "Students", "Faculty", "Sports"]),
    title: zod_1.z.string().min(3, { message: "Title cannot be empty" }).optional()
});
exports.newsUpdateValidation = zod_1.z.object({
    title: zod_1.z.string().max(80).optional(),
    description: zod_1.z
        .string()
        .min(3, { message: "Description cannot be empty" })
        .optional(),
    publishDate: zod_1.z
        .string()
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
        .transform((date) => new Date(date))
        .optional(),
    isActive: zod_1.z.boolean().optional()
});
exports.noticeUpdateValidation = zod_1.z
    .object({
    category: zod_1.z
        .string()
        .min(3, { message: "Category cannot be empty" })
        .optional(),
    title: zod_1.z.string().min(3, { message: "Title cannot be empty" }).optional(),
    pdfUrl: zod_1.z.string().url({ message: "Invalid URL format" }).optional(),
    pdfKey: zod_1.z.string().min(3, { message: "Key cannot be empty" }).optional(),
    isActive: zod_1.z.boolean().optional()
})
    .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
});
exports.staffFormUpdateValidation = zod_1.z
    .object({
    title: zod_1.z.string().min(3, { message: "Title cannot be empty" }).optional(),
    formType: zod_1.z
        .string()
        .min(2, { message: "Form type cannot be empty" })
        .optional(),
    updatedDate: zod_1.z
        .string()
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
        .transform((date) => new Date(date))
        .optional(),
    pdfUrl: zod_1.z.string().url({ message: "Invalid URL format" }).optional(),
    pdfKey: zod_1.z.string().min(3, { message: "Key cannot be empty" }).optional(),
    isActive: zod_1.z.boolean().optional()
})
    .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
});
exports.tenderUpdateValidation = zod_1.z
    .object({
    title: zod_1.z.string().min(3, { message: "Title cannot be empty" }).optional(),
    reference: zod_1.z
        .string()
        .min(3, { message: "Reference cannot be empty" })
        .optional(),
    publishedDate: zod_1.z
        .string()
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
        .transform((date) => new Date(date))
        .optional(),
    closingDate: zod_1.z
        .string()
        .refine((date) => !isNaN(Date.parse(date)), "Invalid date format")
        .transform((date) => new Date(date))
        .optional(),
    category: zod_1.z
        .string()
        .min(3, { message: "Category cannot be empty" })
        .optional(),
    pdfUrl: zod_1.z.string().url({ message: "Invalid URL format" }).optional(),
    pdfKey: zod_1.z.string().min(3, { message: "Key cannot be empty" }).optional(),
    status: zod_1.z.enum(["Open", "Closed"]).optional()
})
    .refine((data) => !(data.pdfUrl && !data.pdfKey), {
    message: "PDF key is required when PDF URL is provided",
    path: ["pdfKey"] // Points to the pdfKey field in error
});
