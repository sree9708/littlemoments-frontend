import * as yup from "yup"

const businessDetailsValidation = yup
  .object({
    address: yup
      .string()
      .required("Description is required.")
      .min(10, "Description must be at least 10 characters long.")
      .max(1000, "Description can be maximum 250 characters long."),
    city: yup
      .string()
      .required("Description is required.")
      .min(5, "Description must be at least 5 characters long.")
      .max(1000, "Description can be maximum 250 characters long."),
    gstin: yup
      .mixed<FileList>()
      .test("fileRequired", "Gstin file is required", value => value && value.length > 0)
      .nullable(),
    pan: yup
      .mixed<FileList>()
      .test("fileRequired", "Pan Card file is required", value => value && value.length > 0)
      .nullable(),
    pocContactNo: yup
      .string()
      .required("Phone number is required.")
      .matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number without any special characters."),
    pocName: yup
      .string()
      .required("POC Name is required.")
      .max(1000, "POC name can be maximum 250 characters long."),
    pocDesignation: yup
      .string()
      .required("Phone number is required.")
      .required("POC designation is required.")
      .max(1000, "POC designation can be maximum 250 characters long."),
  })
  .required()

export default businessDetailsValidation
