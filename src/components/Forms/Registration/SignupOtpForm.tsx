"use client"

import React, { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputText from "../../Inputs/InputText"
import RegistrationButton from "../../Buttons/RegistrationButton"
import OtpInput from "../../Inputs/InputOtp"
import Link from "next/link"
import { SignupContext, SignupContextProps } from "@/services/Context/SignupContext"
import { addphoneNumber, createUser, generateOtp, verifyOtpSignup } from "@/services/Redux/reducers/userSlice"
import { useAppDispatch } from "@/hooks/useStore"
import { useRouter } from "next/navigation"

const schema = yup
  .object({
    phoneNumber: yup
      .string()
      .required("Phone number is required.")
      .matches(/^[0-9]{10}$/, "Phone number must be a 10-digit number without any special characters."),
  })
  .required()

const SignupOtpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const route = useRouter()
  const dispatch = useAppDispatch()

  const [otp, setOtp] = useState("")
  const [isOtpInput, setIsOtpInput] = useState<boolean>(false)

  const { setIsSignup } = useContext(SignupContext) as SignupContextProps

  const onSubmitLogin = async (data: any) => {
    console.log("data", data)
    const phoneNumber = "+91" + data.phoneNumber
    try {
      dispatch(addphoneNumber(phoneNumber))
      await dispatch(generateOtp(phoneNumber))
      await dispatch(createUser())
      setIsOtpInput(true)
    } catch (err: any) {
      setIsSignup(true)
      console.log("form : ", err.message)
    }
  }

  const onSubmitOtp = async (data: any) => {
    console.log(data)
    const phoneNumber = "+91" + data.phoneNumber
    try {
      await dispatch(verifyOtpSignup({ phoneNumber, otp }))
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
          className="flex justify-center text-theme-color-3 mt-2 underline cursor-pointer"
          onClick={handleSignupBack}
        >
          Back
        </div>
        {isOtpInput && (
          <div className="flex justify-between text-theme-color-3 mt-2 underline">
            <button type="button" onClick={changeNumber}>
              Change number
            </button>
            <button>Resend Otp</button>
          </div>
        )}
      </form>
      <div className="flex flex-wrap justify-center gap-2 text-xl">
        <div>Dont have account ?</div>
        <Link href="/signup" className="text-theme-color-3 font-bold">
          Signup instead
        </Link>
      </div>
    </>
  )
}

export default SignupOtpForm
