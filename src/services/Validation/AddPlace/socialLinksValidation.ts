import * as yup from "yup"

const socialLinksValidation = yup
  .object({
    fb: yup
      .string()
      .url("Please enter a valid URL")
      .min(10, "Facebook must be at least 10 characters.")
      .max(100, "Facebook must not exceed 20 characters."),
    instagram: yup
      .string()
      .url("Please enter a valid URL")
      .min(10, "Instagram must be at least 10 characters.")
      .max(100, "Instagram must not exceed 20 characters."),
    youtube: yup
      .string()
      .url("Please enter a valid URL")
      .min(10, "Youtube must be at least 10 characters.")
      .max(100, "Youtube must not exceed 20 characters."),
    twitter: yup
      .string()
      .url("Please enter a valid URL")
      .min(10, "Twitter must be at least 10 characters.")
      .max(100, "Twitter must not exceed 20 characters."),
  })
  .required()

export default socialLinksValidation
