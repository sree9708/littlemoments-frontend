"use client"

import React, { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import InputText from "../../Inputs/InputText"
import RegistrationButton from "../../Buttons/RegistrationButton"
import Link from "next/link"
import { SignupContext, SignupContextProps } from "@/services/Context/SignupContext"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { adduserDetailsForm } from "@/services/Redux/reducers/userSlice"
import signupValidation from "@/services/Validation/Registration/signupValidation"

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupValidation) })

  const { setIsSignup } = useContext(SignupContext) as SignupContextProps
  const dispatch = useAppDispatch()
  const userDetailsForm = useAppSelector(state => state.user?.userDetailsForm)

  const onSubmitSignup = (data: any) => {
    dispatch(adduserDetailsForm(data))
    setIsSignup(false)
  }

  const isGenderSelected = watch("gender") || ""
  const defaultGender = userDetailsForm?.gender || ""
  useEffect(() => {
    setValue("gender", defaultGender) // Set default value using setValue
  }, [defaultGender, setValue])

  return (
    <>
      <form className="py-8" onSubmit={handleSubmit(onSubmitSignup)}>
        <InputText
          name="username"
          type="text"
          placeholder="Username"
          register={register}
          required
          error={errors.username?.message}
          defaultValue={userDetailsForm?.username}
        />
        <InputText
          name="email"
          type="text"
          placeholder="Email"
          register={register}
          required
          error={errors.email?.message}
          defaultValue={userDetailsForm?.email}
        />
        <InputText
          name="currentCity"
          type="text"
          placeholder="City"
          register={register}
          required
          error={errors.currentCity?.message}
          defaultValue={userDetailsForm?.currentCity}
        />
        <select
          id="gender"
          className={`block w-full autofill:bg-yellow-200 bg-transparent rounded-lg p-4 my-3 border-2 text-xl border-primary focus:outline-none focus:ring-transparent appearance-none peer ${
            isGenderSelected === "" ? "text-gray-400" : "text-black"
          }`}
          {...register("gender")}
        >
          <option value="" selected className="text-gray-400">
            {isGenderSelected ? "Select Gender" : "Gender"}
          </option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>
        {errors.gender?.message && <p className="text-red-600 text-sm">{errors.gender?.message}</p>}
        <RegistrationButton text="Continue" />
      </form>
      <div className="flex flex-wrap justify-center gap-2 text-xl">
        <div>Already have account ?</div>
        <Link href="/auth/login" className="text-theme-3 font-bold">
          Login instead
        </Link>
      </div>
    </>
  )
}

export default SignupForm
