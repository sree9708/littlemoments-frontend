import * as yup from "yup"

const signupValidation = yup
  .object({
    username: yup
      .string()
      .required("Username is required.")
      .min(3, "Username must be at least 3 characters.")
      .max(20, "Username must not exceed 20 characters."),
    email: yup
      .string()
      .required("Email is required.")
      .email("Email must be a valid email address.")
      .max(50, "Email must not exceed 50 characters."),
    currentCity: yup
      .string()
      .required("City is required.")
      .min(2, "City must be at least 2 characters.")
      .max(50, "City must not exceed 50 characters."),
    gender: yup
      .string()
      .required("Gender is required.")
      .notOneOf(["", "Gender"], "Gender is required.")
      .oneOf(["male", "female", "other"], "Invalid gender."),
  })
  .required()

export default signupValidation;