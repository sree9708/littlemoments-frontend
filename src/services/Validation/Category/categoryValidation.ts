import * as yup from "yup"

const categoryValidation = yup
  .object({
    category: yup
      .string()
      .required("Category is required.")
      .min(3, "Category must be at least 3 characters.")
      .max(100, "Category must not exceed 100 characters."),
  })
  .required()

export default categoryValidation
