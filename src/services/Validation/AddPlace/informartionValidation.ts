import * as yup from "yup"

const informationValidation = yup
  .object({
    rateCard: yup
      .array()
      .of(
        yup.object().shape({
          title: yup.string().required("Title is required."),
          price: yup
            .number()
            .typeError("Price must be a number.")
            .required("Price is required.")
            .positive("Price must be a positive number.")
            .integer("Price must be an integer."),
        }),
      )
      .min(1, "Rate card is required."),
    placeDescription: yup
      .string()
      .required("Description is required.")
      .min(10, "Description must be at least 10 characters long.")
      .max(1000, "Description can be maximum 250 characters long."),
    superCategory: yup
      .string()
      .required("Place name is required.")
      .min(1, "Place name must be at least 3 characters.")
      .max(100, "Place name must not exceed 50 characters."),
    category: yup
      .string()
      .required("Place name is required.")
      .min(1, "Place name must be at least 3 characters.")
      .max(100, "Place name must not exceed 50 characters."),
    subCategory: yup
      .string()
      .required("Place name is required.")
      .min(1, "Place name must be at least 3 characters.")
      .max(100, "Place name must not exceed 50 characters."),
    startingAge: yup
      .number()
      .required("Starting Age is required.")
      .typeError("Age must be a number.")
      .positive("Starting Age must be a positive number.")
      .integer("Starting Age must be an integer.")
      .test("is-less-than-ending-age", "Starting Age must be less than Ending Age", function (value) {
        const endingAge = this.parent.endingAge
        return value < endingAge
      }),
    endingAge: yup
      .number()
      .required("Ending Age is required.")
      .typeError("Age must be a number.")
      .positive("Ending Age must be a positive number.")
      .integer("Ending Age must be an integer.")
      .test("is-greater-than-starting-age", "Ending Age must be greater than Starting Age", function (value) {
        const startingAge = this.parent.startingAge
        return value > startingAge
      }),
  })
  .required()

export default informationValidation
