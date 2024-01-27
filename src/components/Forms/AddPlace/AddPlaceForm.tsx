"use client"

import { set, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import InputText from "../../Inputs/InputText"
import RegistrationButton from "../../Buttons/RegistrationButton"
import { useContext, useEffect } from "react"
import { TrackerContext, TrackerContextProps } from "@/services/Context/TrackerContext"
import { useRouter } from "next/navigation"
import { FaArrowLeftLong } from "react-icons/fa6"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { addPlaceOwner } from "@/services/Redux/reducers/propSlice"
import addPlaceValidation from "@/services/Validation/addPlaceValidation"


const AddPlaceForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(addPlaceValidation) })

  const { push } = useRouter()
  const dispatch = useAppDispatch()

  const propDetailsForm = useAppSelector(state => state.prop?.propDetailsForm)
  const propInformation = useAppSelector(state => state.prop?.propInformations)
  const { setIsTracker } = useContext(TrackerContext) as TrackerContextProps

  useEffect(() => {
    setIsTracker(1)
    setValue("email", propInformation?.email || "")
    setValue("placeName", propDetailsForm?.placeName || "")
    setValue("displayContactNo", propDetailsForm?.displayContactNo || "")
  }, [setIsTracker, setValue, propInformation, propDetailsForm])

  const onSubmitSignup = (data: any) => {
    dispatch(addPlaceOwner(data))
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
          // defaultValue={propDetailsForm?.placeName}
        />
        <InputText
          name="email"
          type="email"
          placeholder="Email"
          register={register}
          required
          error={errors.email?.message}
          disabled={true}
          // defaultValue={propInformation?.email}
        />
        <InputText
          name="displayContactNo"
          type="text"
          placeholder="Phone number"
          register={register}
          required
          error={errors.displayContactNo?.message}
          // defaultValue={propDetailsForm?.displayContactNo}
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
