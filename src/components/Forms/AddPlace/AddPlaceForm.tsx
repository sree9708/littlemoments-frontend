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

const schema = yup
  .object({
    placeName: yup
      .string()
      .required("Place name is required.")
      .min(3, "Place name must be at least 3 characters.")
      .max(100, "Place name must not exceed 20 characters."),
    email: yup.string().trim().required("Email is required.").email("Invalid email format."),
    phoneNumber: yup
      .string()
      .required("Phone number is required.")
      .matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number without any special characters."),
    altranativePhoneNumber: yup
      .string()
      .required("Phone number is required.")
      .matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number without any special characters."),
  })
  .required()

const AddPlaceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const { push } = useRouter()

  const { setIsTracker } = useContext(TrackerContext) as TrackerContextProps

  useEffect(() => {
    setIsTracker(1)
  }, [setIsTracker])

  const onSubmitSignup = (data: any) => {
    console.log("data", data)
    push("/add-place/business-details")
  }

  const handleBack = () => {
    push("/")
  }

  return (
    <>
      <form className="py-8" onSubmit={handleSubmit(onSubmitSignup)}>
        <InputText
          name="placeName"
          type="text"
          placeholder="Place name"
          register={register}
          required
          error={errors.placeName?.message}
        />
        <InputText
          name="email"
          type="email"
          placeholder="Email"
          register={register}
          required
          error={errors.email?.message}
        />
        <InputText
          name="phoneNumber"
          type="text"
          placeholder="Phone number"
          register={register}
          required
          error={errors.phoneNumber?.message}
        />
        <InputText
          name="altranativePhoneNumber"
          type="text"
          placeholder="Altranative phone number"
          register={register}
          required
          error={errors.altranativePhoneNumber?.message}
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

export default AddPlaceForm
