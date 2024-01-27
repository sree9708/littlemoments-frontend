"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputText from "../../Inputs/InputText"
import { useRouter } from "next/navigation"
import InputTextarea from "@/components/Inputs/InputTextarea"
import InputFile from "@/components/Inputs/InputFile"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { base64ToFile, filetoBase64 } from "@/services/Utilities/base64/base64.services"
import { useState } from "react"
import RegistrationButton from "@/components/Buttons/RegistrationButton"

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
  const dispatch = useAppDispatch()
  const propDetailsForm = useAppSelector(state => state.prop?.propDetailsForm)

  const gstin = propDetailsForm ? base64ToFile(propDetailsForm?.gstin as string, `gstin`) : undefined
  const pan = propDetailsForm ? base64ToFile(propDetailsForm?.pan as string, `pan`) : undefined

  const [gstinFile, setGstinFile] = useState<File | null>(gstin ? gstin : null)
  const [panFile, setPanFile] = useState<File | null>(pan ? pan : null)

  const onSubmitSignup = async (data: any) => {
    const filePromises = [
      gstinFile ? filetoBase64(gstinFile) : Promise.resolve(null),
      panFile ? filetoBase64(panFile) : Promise.resolve(null),
    ]

    const [gstinFileBase64, panFileBase64] = await Promise.all(filePromises)

    push("/add-place/information")
  }

  const handleGstinFileChange = (file: File | null) => {
    setGstinFile(file)
  }

  const handlePanFileChange = (file: File | null) => {
    setPanFile(file)
  }

  const handleBack = () => {
    push("/add-place")
  }

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
          <RegistrationButton text="Save" />
        </div>
      </form>
    </>
  )
}

export default BusinessDetailsForm
