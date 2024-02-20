import * as yup from "yup"

const subCategoryValidation = yup
  .object({
    subCategory: yup
      .string()
      .required("Sub Category is required.")
      .min(3, "Sub Category must be at least 3 characters.")
      .max(100, "Sub Category must not exceed 100 characters."),
  })
  .required()

export default subCategoryValidation
