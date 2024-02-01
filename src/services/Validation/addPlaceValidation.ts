import * as yup from "yup"

const addPlaceValidation = yup
  .object({
    placeName: yup
      .string()
      .required("Place name is required.")
      .min(3, "Place name must be at least 3 characters.")
      .max(100, "Place name must not exceed 20 characters."),
    email: yup.string().trim().required("Email is required.").email("Invalid email format."),
    displayContactNo: yup
      .string()
      .required("Phone number is required.")
      .matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number without any special characters."),
  })
  .required()

export default addPlaceValidation
