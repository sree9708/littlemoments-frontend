import * as yup from "yup"

const cityValidation = yup
  .object({
    city: yup
      .string()
      .required("City is required.")
      .min(3, "City must be at least 3 characters.")
      .max(100, "City must not exceed 100 characters."),
  })
  .required()

export default cityValidation
