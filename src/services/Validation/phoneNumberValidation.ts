import * as yup from "yup"

const phoneNumberValidation = yup.object({
  phoneNumber: yup
    .string()
    .required("Phone number is required.")
    .matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number without any special characters."),
})
.required()

export default phoneNumberValidation;