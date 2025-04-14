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
    .number()
    .min(10, { message: "Contact number must be 10 digits" })
    .max(10, { message: "Contact number must be 10 digits" }),
  profileImageUrl: z.string({ message: "Profile image is required" }),
  designation: z.string({ message: "Designation is required" }),
  isHod: z.boolean(),
  facultyType: z.enum(["Teaching", "Non_Teaching"], {
    message: "Faculty type must be either Teaching or Non_Teaching"
  }),
  cvUrl: z.string().optional(),
  socialLinks: z
    .object({
      linkedin: z.string().url().optional(),
      twitter: z.string().url().optional(),
      instagram: z.string().url().optional(),
      facebook: z.string().url().optional(),
      research_gate: z.string().url().optional()
    })
    .optional(),
  department: z.enum(["dept_a", "dept_b"], {
    message: "Department is required"
  })
});
