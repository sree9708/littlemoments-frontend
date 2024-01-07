import InputFileEdit from "@/components/Inputs/EditProfile/InputFileEdit"
import InputTextEdit from "@/components/Inputs/EditProfile/InputTextEdit"
import InputTextSocialLinksEdit from "@/components/Inputs/EditProfile/InputTextSocialLinksEdit"
import InputTextareaEdit from "@/components/Inputs/EditProfile/InputTextareaEdit"
import InputTextSocialLinks from "@/components/Inputs/InputTextSocialLinks"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"

const schema = yup
  .object({
    facebook: yup
      .string()
      .url("Please enter a valid URL")
      .min(3, "Facebook must be at least 3 characters.")
      .max(100, "Facebook must not exceed 20 characters."),
    instagram: yup
      .string()
      .url("Please enter a valid URL")
      .min(3, "Instagram must be at least 3 characters.")
      .max(100, "Instagram must not exceed 20 characters."),
    youtube: yup
      .string()
      .url("Please enter a valid URL")
      .min(3, "Youtube must be at least 3 characters.")
      .max(100, "Youtube must not exceed 20 characters."),
    twitter: yup
      .string()
      .url("Please enter a valid URL")
      .min(3, "Twitter must be at least 3 characters.")
      .max(100, "Twitter must not exceed 20 characters."),
  })
  .required()

const SocialLinksDescription = ({ isEdit }: { isEdit: boolean }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  useEffect(() => {
    setValue("facebook", "littlemoments")
    setValue("instagram", "littlemoments")
    setValue("youtube", "littlemoments")
    setValue("twitter", "littlemoments")
  }, [setValue])

  return (
    <div className="pt-6">
      <div className="block sm:flex w-full gap-4 my-4">
        <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
          <div className="flex-grow opacity-70">
            <InputTextSocialLinksEdit
              name="facebook"
              type="text"
              placeholder="Facebook"
              register={register}
              disabled={!isEdit}
              icon="facebook"
              required={false}
              error={errors.facebook?.message}
            />
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
          <div className="flex-grow opacity-70">
            <InputTextSocialLinksEdit
              name="instagram"
              type="text"
              placeholder="Instagram"
              register={register}
              disabled={!isEdit}
              icon="instagram"
              required={false}
              error={errors.instagram?.message}
            />
          </div>
        </div>
      </div>
      <div className="block sm:flex w-full gap-4 my-4">
        <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
          <div className="flex-grow opacity-70">
            <InputTextSocialLinksEdit
              name="youtube"
              type="text"
              placeholder="Youtube"
              register={register}
              disabled={!isEdit}
              icon="youtube"
              required={false}
              error={errors.youtube?.message}
            />
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
          <div className="flex-grow opacity-70">
            <InputTextSocialLinksEdit
              name="twitter"
              type="text"
              placeholder="twitter"
              register={register}
              disabled={!isEdit}
              icon="twitter"
              required={false}
              error={errors.twitter?.message}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialLinksDescription
