import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  password: Yup.string()
    .required("Please enter your password")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default signUpSchema;
