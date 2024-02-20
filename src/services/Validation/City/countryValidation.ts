import * as yup from "yup"

const countryValidation = yup
  .object({
    country: yup
      .string()
      .required("Country is required.")
      .min(3, "Country must be at least 3 characters.")
      .max(100, "Country must not exceed 100 characters."),
  })
  .required()

export default countryValidation
