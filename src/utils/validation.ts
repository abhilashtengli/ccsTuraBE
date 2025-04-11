import validator from "validator";

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


