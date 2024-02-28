"use client"

import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import InputText from "../../Inputs/InputText"
import RegistrationButton from "../../Buttons/RegistrationButton"
import OtpInput from "../../Inputs/InputOtp"
import Link from "next/link"
import { SignupContext, SignupContextProps } from "@/services/Context/SignupContext"
import {
  addphoneNumber,
  createUserThunk,
  generateOtpWithPhoneNumberThunk,
  verifyOtpThunk,
} from "@/services/Redux/reducers/userSlice"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { useRouter } from "next/navigation"
import phoneNumberValidation from "@/services/Validation/Registration/phoneNumberValidation"
import { errorMessage } from "@/hooks/useNotifications"

const SignupOtpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(phoneNumberValidation) })

  const route = useRouter()
  const dispatch = useAppDispatch()

  const [otp, setOtp] = useState("")
  const [isOtpInput, setIsOtpInput] = useState<boolean>(false)

  const [isError, setIsError] = useState<string | null>(null)

  const { setIsSignup } = useContext(SignupContext) as SignupContextProps
  const phoneNumber = useAppSelector(state => state.user?.userDetailsForm?.phoneNumber)

  const onSubmitSignup = async (data: any) => {
    try {
      dispatch(addphoneNumber(data.phoneNumber))
      console.log("1")
      await dispatch(generateOtpWithPhoneNumberThunk(data.phoneNumber))
      console.log("2")
      setIsOtpInput(true)
      console.log("3")
    } catch (err: any) {
      console.log("4")
      setIsError(err.message)
      errorMessage(err.message)
      console.log("5")
    }
  }

  const onSubmitOtp = async (data: any) => {
    try {
      await dispatch(verifyOtpThunk({ phoneNumber: data.phoneNumber, otp }))
      await dispatch(createUserThunk(undefined))
      setIsOtpInput(false)
      route.push("/")
    } catch (err: any) {
      setIsError(err.message)
      errorMessage(err.message)
    }
  }

  const changeNumber = () => {
    setIsOtpInput(false)
  }

  const handleSignupBack = () => {
    setIsSignup(true)
  }

  return (
    <>
      <form
        className="py-8"
        onSubmit={e => {
          e.preventDefault()
          isOtpInput ? handleSubmit(onSubmitOtp)() : handleSubmit(onSubmitSignup)()
        }}
      >
        <InputText
          name="phoneNumber"
          type="text"
          placeholder="Enter Phone No."
          register={register}
          required
          error={errors.phoneNumber?.message}
          disabled={isOtpInput}
          defaultValue={phoneNumber}
        />
        {isOtpInput && (
          <OtpInput
            value={otp}
            onChange={val => {
              setOtp(val)
            }}
          />
        )}
        {isError && <div className="text-red-500 text-sm">{isError}</div>}
        <RegistrationButton text={isOtpInput ? "Verify Otp" : "Sign Up"} />
        <div
          className="flex justify-center text-theme-3 mt-2 underline cursor-pointer"
          onClick={handleSignupBack}
        >
          Back
        </div>
        {isOtpInput && (
          <div className="flex justify-between text-theme-3 mt-2 underline">
            <button type="button" onClick={changeNumber}>
              Change number
            </button>
            <button>Resend Otp</button>
          </div>
        )}
      </form>
      <div className="flex flex-wrap justify-center gap-2 text-xl">
        <div>Dont have account ?</div>
        <Link href="/auth/signup" className="text-theme-3 font-bold">
          Signup instead
        </Link>
      </div>
    </>
  )
}

export default SignupOtpForm
