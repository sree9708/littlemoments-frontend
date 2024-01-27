"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputText from "../../Inputs/InputText"
import { useRouter } from "next/navigation"
import InputTextarea from "@/components/Inputs/InputTextarea"
import InputRateCard from "@/components/Inputs/InputRateCard"
import InputTime from "@/components/Inputs/InputTime"
import InputCategory from "@/components/Inputs/InputCategory"
import InputAge from "@/components/Inputs/InputAge"

const schema = yup
  .object({
    location: yup
      .string()
      .required("Place name is required.")
      .min(3, "Place name must be at least 3 characters.")
      .max(100, "Place name must not exceed 20 characters."),
    placeDescription: yup
      .string()
      .required("Description is required.")
      .min(10, "Description must be at least 10 characters long.")
      .max(1000, "Description can be maximum 250 characters long."),
    phoneNumber: yup
      .string()
      .required("Phone number is required.")
      .matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number without any special characters."),
    category: yup
      .string()
      .required("Place name is required.")
      .min(1, "Place name must be at least 3 characters.")
      .max(100, "Place name must not exceed 20 characters."),
    subCategory: yup
      .string()
      .required("Place name is required.")
      .min(1, "Place name must be at least 3 characters.")
      .max(100, "Place name must not exceed 20 characters."),
    startingAge: yup
      .number()
      .required("Starting Age is required.")
      .positive("Starting Age must be a positive number.")
      .integer("Starting Age must be an integer.")
      .test("is-less-than-ending-age", "Starting Age must be less than Ending Age", function (value) {
        const endingAge = this.parent.endingAge
        return value < endingAge
      }),
    endingAge: yup
      .number()
      .required("Ending Age is required.")
      .positive("Ending Age must be a positive number.")
      .integer("Ending Age must be an integer.")
      .test("is-greater-than-starting-age", "Ending Age must be greater than Starting Age", function (value) {
        const startingAge = this.parent.startingAge
        return value > startingAge
      }),
  })
  .required()

const InformationForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const { push } = useRouter()

  const onSubmitSignup = (data: any) => {
    push("/add-place/information")
  }

  return (
    <>
      <form className="pt-6" onSubmit={handleSubmit(onSubmitSignup)}>
        <div className="block sm:flex w-full gap-4">
          <InputRateCard />
          <InputTime />
        </div>
        <div className="block sm:flex items-center w-full gap-4">
          <InputText
            name="phoneNumber"
            type="text"
            placeholder="Contact no."
            register={register}
            required
            error={errors.phoneNumber?.message}
          />
          <InputTextarea
            name="placeDescription"
            type="text"
            placeholder="Place Description"
            register={register}
            required
            error={errors.placeDescription?.message}
          />
        </div>
        <div className="block sm:flex items-center w-full gap-4">
          <InputCategory
            name="category"
            watch={watch}
            category={["a", "b", "c", "d"]}
            placeholder="Category"
            register={register}
            required
            error={errors.category?.message}
          />
          <InputCategory
            name="subCategory"
            watch={watch}
            category={["a", "b", "c", "d"]}
            placeholder="Sub Category"
            register={register}
            required
            error={errors.subCategory?.message}
          />
        </div>
        <div className="flex gap-4">
          <InputAge
            name="startingAge"
            watch={watch}
            placeholder="Starting Age"
            register={register}
            required
            error={errors.startingAge?.message}
          />
          <InputAge
            name="endingAge"
            watch={watch}
            placeholder="Ending Age"
            register={register}
            required
            error={errors.endingAge?.message}
          />
        </div>
      </form>
    </>
  )
}

export default InformationForm
