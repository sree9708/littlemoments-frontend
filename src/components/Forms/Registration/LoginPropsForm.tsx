/* eslint-disable react/no-unescaped-entities */
"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputText from "../../Inputs/InputText"
import RegistrationButton from "../../Buttons/RegistrationButton"
import Link from "next/link"
import { loginProp } from "@/services/Redux/reducers/propSlice"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/hooks/useStore"

const schema = yup
  .object({
    email: yup.string().trim().required("Email is required.").email("Invalid email format."),
    password: yup
      .string()
      .required("Password is required.")
      .matches(
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[a-zA-Z\d@$!%*#?&]+$/,
        "Password must be at least 6 characters long and include a letter, a number, and a special character.",
      )
      .min(6, "Password must be at least 6 characters long"),
  })
  .required()

const LoginPropsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const router = useRouter()
  const dispatch = useAppDispatch()

  const onSubmitLogin = async (data: any) => {
    try {
      await dispatch(loginProp({ email: data.email, password: data.password }))
      router.push("/")
    } catch (err: any) {
      console.log("form : ", err.message)
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
        <RegistrationButton text="Login" />
      </form>
      <div className="flex flex-wrap justify-center gap-2 text-xl">
        <div>Don't have account ?</div>
        <Link href="/signup/props" className="text-theme-color-3 font-bold">
          Signup instead
        </Link>
      </div>
    </>
  )
}

export default LoginPropsForm
