import * as yup from "yup"

const socialLinksValidation = yup.object({
  fb: yup.string().url("Please enter a valid URL").max(200, "Facebook must not exceed 200 characters."),
  instagram: yup
    .string()
    .url("Please enter a valid URL")
    .max(200, "Instagram must not exceed 200 characters."),
  youtube: yup.string().url("Please enter a valid URL").max(200, "Youtube must not exceed 200 characters."),
  twitter: yup
    .string()
    .url("Please enter a valid URL")
    .nullable()
    .max(200, "Twitter must not exceed 200 characters."),
})

export default socialLinksValidation
