import * as yup from "yup"

const superCategoryValidation = yup
  .object({
    superCategory: yup
      .string()
      .required("Super category is required.")
      .min(3, "Super category must be at least 3 characters.")
      .max(100, "Super category must not exceed 100 characters."),
  })
  .required()

export default superCategoryValidation
