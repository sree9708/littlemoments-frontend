"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import InputText from "../../Inputs/InputText"
import RegistrationButton from "../../Buttons/RegistrationButton"
import { useContext, useEffect, useState } from "react"
import { TrackerContext, TrackerContextProps } from "@/services/Context/TrackerContext"
import { useRouter } from "next/navigation"
import { FaArrowLeftLong } from "react-icons/fa6"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { addPlaceOwner } from "@/services/Redux/reducers/propSlice"
import addPlaceValidation from "@/services/Validation/AddPlace/addPlaceValidation"
import OtpInput from "@/components/Inputs/InputOtp"
import { generateOtpWithPhoneNumberThunk, verifyOtpThunk } from "@/services/Redux/reducers/userSlice"

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
  const phoneNumberVerified = useAppSelector(state => state.user?.phoneNumberVerified)
  const { setIsTracker } = useContext(TrackerContext) as TrackerContextProps

  const [otp, setOtp] = useState("")
  const [isOtpInput, setIsOtpInput] = useState<boolean>(false)
  const [genarateOtp, setGenarateOtp] = useState(true)
  const [isError, setIsError] = useState<string | null>(null)

  useEffect(() => {
    setIsTracker(1)
    // setValue("email", propInformation?.email || "")
    setValue("placeName", propDetailsForm?.placeName || "")
    setValue("displayContactNo", propDetailsForm?.displayContactNo || "")
  }, [setIsTracker, setValue, propInformation, propDetailsForm])

  const onSubmitSignup = async (data: any) => {
    if (genarateOtp) {
      try {
        await dispatch(generateOtpWithPhoneNumberThunk(data.displayContactNo))
        setGenarateOtp(false)
        setIsOtpInput(true)
      } catch (err: any) {
        setIsError(err.message)
        console.log("form : ", err.message)
      }
    } else {
      if (isOtpInput) {
        try {
          await dispatch(verifyOtpThunk({ phoneNumber: data.displayContactNo, otp }))
          setIsOtpInput(false)
        } catch (err: any) {
          setIsError(err.message)
          console.log("form : ", err.message)
        }
      } else {
        dispatch(addPlaceOwner(data))
        push("/add-place/business-details")
      }
    }
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
        {/* <InputText
          name="email"
          type="email"
          placeholder="Email"
          register={register}
          required
          error={errors.email?.message}
          disabled={true}
          // defaultValue={propInformation?.email}
        /> */}
        <InputText
          name="displayContactNo"
          type="text"
          placeholder="Phone number"
          register={register}
          required
          disabled={phoneNumberVerified}
          error={errors.displayContactNo?.message}
          // defaultValue={propDetailsForm?.displayContactNo}
        />
        {isOtpInput && (
          <OtpInput
            value={otp}
            onChange={val => {
              setOtp(val)
            }}
          />
        )}
        {isError && <p className="text-red-500 text-center">{isError}</p>}
        <div className="flex gap-4">
          <button
            type="button"
            className="w-fit flex items-center gap-2 bg-background text-primary mt-8 p-4 rounded-md border-2 border-primary text-2xl font-bold"
            onClick={handleBack}
          >
            <FaArrowLeftLong />
            Back
          </button>
          {!phoneNumberVerified ? (
            genarateOtp ? (
              <button
                type="submit"
                className="w-full bg-theme-3 mt-8 p-4 rounded-md border-2 border-primary text-2xl text-secondary font-bold"
              >
                Generate otp
              </button>
            ) : isOtpInput ? (
              <button
                type="submit"
                className="w-full bg-theme-3 mt-8 p-4 rounded-md border-2 border-primary text-2xl text-secondary font-bold"
              >
                Verify Otp
              </button>
            ) : (
              <RegistrationButton text="Continue" />
            )
          ) : (
            <RegistrationButton text="Continue" />
          )}
        </div>
      </form>
    </>
  )
}

export default AddPlaceForm
