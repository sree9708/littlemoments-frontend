import * as yup from "yup"

const reviewValidation = yup
.object({
  title: yup
    .string()
    .required("Title is required.")
    .min(3, "Title must be at least 3 characters.")
    .max(100, "Title must not exceed 100 characters."),
  review: yup
    .string()
    .required("Review is required.")
    .min(3, "Review must be at least 3 characters.")
    .max(1000, "Review must not exceed 1000 characters."),
  rating: yup.number().required("Rating is required"),
})
.required()

export default reviewValidation;