"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputText from "../../Inputs/InputText"
import RegistrationButton from "../../Buttons/RegistrationButton"
import { useContext, useEffect } from "react"
import { TrackerContext, TrackerContextProps } from "@/services/Context/TrackerContext"
import { useRouter } from "next/navigation"
import { FaArrowLeftLong } from "react-icons/fa6"
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
        // Validate file type if needed
        // Example: return value && ['image/jpeg', 'image/png'].includes(value[0].type);
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
      .required("POC Name is required.")
      .max(1000, "POC name can be maximum 250 characters long."),
    pocDesignation: yup
      .string()
      .required("Phone number is required.")
      .required("POC designation is required.")
      .max(1000, "POC designation can be maximum 250 characters long."),
  })
  .required()

const BusinessDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const { push } = useRouter()

  const { setIsTracker } = useContext(TrackerContext) as TrackerContextProps

  useEffect(() => {
    setIsTracker(2)
  }, [setIsTracker])

  const onSubmitSignup = (data: any) => {
    console.log("data", data)
    push("/add-place/information")
  }

  const handleBack = () => {
    push("/add-place")
  }

  return (
    <>
      <form className="py-8" onSubmit={handleSubmit(onSubmitSignup)}>
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
        <div className="flex gap-4">
          <button
            type="button"
            className="w-fit flex items-center gap-2 bg-background text-primary mt-8 p-4 rounded-md border-2 border-primary text-2xl font-bold"
            onClick={handleBack}
          >
            <FaArrowLeftLong />
            Back
          </button>
          <RegistrationButton text="Continue" />
        </div>
      </form>
    </>
  )
}

export default BusinessDetailsForm
