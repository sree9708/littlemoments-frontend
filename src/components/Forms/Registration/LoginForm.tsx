"use client"

import React, { useState } from "react"
import { set, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import InputText from "../../Inputs/InputText"
import RegistrationButton from "../../Buttons/RegistrationButton"
import OtpInput from "../../Inputs/InputOtp"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  addLocationThunk,
  generateOtpByLoginThunk,
  userLoginThunk,
} from "@/services/Redux/reducers/userSlice"
import { useAppDispatch } from "@/hooks/useStore"
import loginValidation from "@/services/Validation/Registration/phoneNumberValidation"
import { errorMessage } from "@/hooks/useNotifications"

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginValidation) })

  const [otp, setOtp] = useState("")
  const [isOtpInput, setIsOtpInput] = useState<boolean>(false)
  const [isError, setIsError] = useState<string | null>(null)

  const route = useRouter()
  const dispatch = useAppDispatch()

  const onSubmitLogin = async (data: any) => {
    try {
      await dispatch(generateOtpByLoginThunk(data.phoneNumber))
      setIsOtpInput(true)
    } catch (err: any) {
      setIsError(err.message)
      errorMessage(err.message)
    }
  }

  function getCurrentPosition(options = {}) {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
  }

  const onSubmitOtp = async (data: any) => {
    try {
      await dispatch(userLoginThunk({ phoneNumber: data.phoneNumber, otp }))

      const position: any = await getCurrentPosition()
      const { latitude: lat, longitude: long } = position.coords

      const browser = navigator.userAgent
      const device = navigator.platform

      try {
        await dispatch(
          addLocationThunk({
            lat,
            long,
            browser,
            device,
          }),
        )
      } catch (err: any) {
        errorMessage(err.message)
      }
      setIsOtpInput(false)
      route.push("/")
    } catch (err: any) {
      errorMessage(err.message)
    }
  }

  const changeNumber = () => {
    setIsOtpInput(false)
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
        {isError && <div className="text-red-500 text-sm">{isError}</div>}
        <RegistrationButton text={isOtpInput ? "Verify Otp" : "Login"} />
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

export default LoginForm
