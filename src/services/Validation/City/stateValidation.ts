import * as yup from "yup"

const stateValidation = yup
  .object({
    state: yup
      .string()
      .required("State is required.")
      .min(3, "State must be at least 3 characters.")
      .max(100, "State must not exceed 100 characters."),
  })
  .required()

export default stateValidation
