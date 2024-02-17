/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import InputText from "../../Inputs/InputText"
import RegistrationButton from "../../Buttons/RegistrationButton"
import Link from "next/link"
import { loginPropThunk } from "@/services/Redux/reducers/propSlice"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/hooks/useStore"
import loginPropValidation from "@/services/Validation/Registration/loginPropValidation"
import { errorMessage } from "@/hooks/useNotifications"

const LoginPropsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginPropValidation) })

  const [isError, setIsError] = useState<string | null>(null)

  const router = useRouter()
  const dispatch = useAppDispatch()

  const onSubmitLogin = async (data: any) => {
    try {
      await dispatch(loginPropThunk({ email: data.email, password: data.password }))
      setIsError(null)
      router.push("/")
    } catch (err: any) {
      setIsError(err.message)
      errorMessage(err.message)
      console.log(err.message)
    }
  }

  return (
    <>
      <form className="py-8" onSubmit={handleSubmit(onSubmitLogin)}>
        <InputText
          name="email"
          type="email"
          placeholder="Enter email"
          register={register}
          required
          error={errors.email?.message}
        />
        <InputText
          name="password"
          type="password"
          placeholder="Enter password"
          register={register}
          required
          error={errors.password?.message}
        />
        {isError && <div className="text-red-500 text-center">{isError}</div>}
        <RegistrationButton text="Login" />
      </form>
      <div className="flex flex-wrap justify-center gap-2 text-xl">
        <div>Don't have account ?</div>
        <Link href="/auth/signup/props" className="text-theme-3 font-bold">
          Signup instead
        </Link>
      </div>
    </>
  )
}

export default LoginPropsForm
