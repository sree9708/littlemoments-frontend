"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputText from "../../Inputs/InputText"
import { useRouter } from "next/navigation"
import InputTextarea from "@/components/Inputs/InputTextarea"
import InputFile from "@/components/Inputs/InputFile"

const schema = yup
  .object({
    location: yup
      .string()
      .required("Place name is required.")
      .min(3, "Place name must be at least 3 characters.")
      .max(100, "Place name must not exceed 20 characters."),
    address: yup
      .string()
      .required("Description is required.")
      .min(10, "Description must be at least 10 characters long.")
      .max(1000, "Description can be maximum 250 characters long."),
    gstin: yup
      .mixed()
      .test("fileSize", "File size is too large", value => {
        return true // For simplicity, always return true for now
      })
      .test("fileType", "Invalid file type", value => {
        return true // For simplicity, always return true for now
      })
      .nullable()
      .required("GSTIN file is required."),
    pan: yup
      .mixed()
      .test("fileSize", "File size is too large", value => {
        return true // For simplicity, always return true for now
      })
      .test("fileType", "Invalid file type", value => {
        return true // For simplicity, always return true for now
      })
      .nullable()
      .required("Pan Card file is required."),
    pocPhoneNumber: yup
      .string()
      .required("Phone number is required.")
      .matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number without any special characters."),
    pocName: yup
      .string()
      .required("Description is required.")
      .min(10, "Description must be at least 10 characters long.")
      .max(1000, "Description can be maximum 250 characters long."),
    pocDesignation: yup
      .string()
      .required("Phone number is required.")
      .matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number without any special characters."),
  })
  .required()

const BusinessDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const { push } = useRouter()

  const onSubmitSignup = (data: any) => {
    console.log("data", data)
    push("/add-place/information")
  }

  // const handleBack = () => {
  //   push("/add-place");
  // };

  return (
    <>
      <form className="pt-4 w-full" onSubmit={handleSubmit(onSubmitSignup)}>
        <div className="block sm:flex w-full gap-4">
          <InputText
            name="location"
            type="text"
            placeholder="Add Location (link)"
            register={register}
            required
            error={errors.location?.message}
          />
          <InputTextarea
            name="address"
            type="text"
            placeholder="Address"
            register={register}
            required
            error={errors.address?.message}
          />
        </div>
        <div className="block sm:flex w-full gap-4">
          <InputFile
            name="gstin"
            label="GSTIN"
            type="file"
            register={register}
            required
            error={errors.gstin?.message}
          />
          <InputFile
            name="pan"
            label="PAN Card"
            type="file"
            register={register}
            required
            error={errors.pan?.message}
          />
        </div>
        <div className="block sm:flex w-full gap-4">
          <InputText
            name="pocPhoneNumber"
            type="text"
            placeholder="POC Contact No."
            register={register}
            required
            error={errors.pocPhoneNumber?.message}
          />
          <InputText
            name="pocName"
            type="text"
            placeholder="POC Name"
            register={register}
            required
            error={errors.pocName?.message}
          />
          <InputText
            name="pocDesignation"
            type="text"
            placeholder="POC Designation"
            register={register}
            required
            error={errors.pocDesignation?.message}
          />
        </div>
      </form>
    </>
  )
}

export default BusinessDetailsForm
