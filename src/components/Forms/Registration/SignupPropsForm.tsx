"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import InputText from "../../Inputs/InputText"
import RegistrationButton from "../../Buttons/RegistrationButton"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/hooks/useStore"
import { createPropThunk } from "@/services/Redux/reducers/propSlice"
import signupPropValidation from "@/services/Validation/Registration/signupPropValidation"

const SignupPropsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupPropValidation) })

  const router = useRouter()
  const dispatch = useAppDispatch()

  const onSubmitLogin = async (data: any) => {
    try {
      await dispatch(createPropThunk({ email: data.email, password: data.password }))
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
        <Link href="/login/props" className="text-theme-3 font-bold">
          Login instead
        </Link>
      </div>
    </>
  )
}

export default SignupPropsForm
