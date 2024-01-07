"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import InputText from "../../Inputs/InputText"
import RegistrationButton from "../../Buttons/RegistrationButton"
import Link from "next/link"
import { useRouter } from "next/navigation"

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
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match") // Ensure it matches the 'password' field
      .required("Confirm Password is required."),
  })
  .required()

const SignupPropsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const router = useRouter()

  const onSubmitLogin = (data: any) => {
    console.log("data", data)
    router.push("/")
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
        <InputText
          name="confirmPassword"
          type="password"
          placeholder="Enter confirm password"
          register={register}
          required
          error={errors.confirmPassword?.message}
        />
        <RegistrationButton text="Sign Up" />
      </form>
      <div className="flex flex-wrap justify-center gap-2 text-xl">
        <div>Already have account ?</div>
        <Link href="/login/props" className="text-theme-color-3 font-bold">
          Login instead
        </Link>
      </div>
    </>
  )
}

export default SignupPropsForm
