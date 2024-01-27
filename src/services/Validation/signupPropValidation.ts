import * as yup from "yup"

const signupPropValidation = yup
.object({
  email: yup.string().trim().required("Email is required.").email("Invalid email format."),
  password: yup
    .string()
    .required("Password is required.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]+$/,
      "Password must be at least 6 characters long and include a letter, a number, and a special character.",
    )
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match") // Ensure it matches the 'password' field
    .required("Confirm Password is required."),
})
.required()

export default signupPropValidation;