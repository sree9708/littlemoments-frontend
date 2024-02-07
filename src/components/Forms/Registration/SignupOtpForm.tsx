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
  generateOtpThunk,
  verifyOtpSignupThunk,
} from "@/services/Redux/reducers/userSlice"
import { useAppDispatch } from "@/hooks/useStore"
import { useRouter } from "next/navigation"
import phoneNumberValidation from "@/services/Validation/Registration/phoneNumberValidation"

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

  const { setIsSignup } = useContext(SignupContext) as SignupContextProps

  const onSubmitLogin = async (data: any) => {
    try {
      dispatch(addphoneNumber(data.phoneNumber))
      await dispatch(generateOtpThunk(data.phoneNumber))
      await dispatch(createUserThunk(undefined))
      setIsOtpInput(true)
    } catch (err: any) {
      setIsSignup(true)
      console.log("form : ", err.message)
    }
  }

  const onSubmitOtp = async (data: any) => {
    try {
      await dispatch(verifyOtpSignupThunk({ phoneNumber: data.phoneNumber, otp }))
      setIsOtpInput(false)
      route.push("/")
    } catch (err: any) {
      console.log("form : ", err.message)
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
          isOtpInput ? handleSubmit(onSubmitOtp)() : handleSubmit(onSubmitLogin)()
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
        />
        {isOtpInput && (
          <OtpInput
            value={otp}
            onChange={val => {
              setOtp(val)
            }}
          />
        )}
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
        <Link href="/signup" className="text-theme-3 font-bold">
          Signup instead
        </Link>
      </div>
    </>
  )
}

export default SignupOtpForm
