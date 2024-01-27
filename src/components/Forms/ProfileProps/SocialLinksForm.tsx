"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useRouter } from "next/navigation"
import InputTextSocialLinks from "@/components/Inputs/InputTextSocialLinks"

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

const SocialLinksForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const { push } = useRouter()

  const onSubmitSignup = (data: any) => {
    push("/add-place/business-details")
  }

  return (
    <>
      <form className="" onSubmit={handleSubmit(onSubmitSignup)}>
        <div className="block sm:flex w-full gap-4">
          <InputTextSocialLinks
            name="facebook"
            type="text"
            placeholder="Facebook"
            register={register}
            icon="facebook"
            required={false}
            error={errors.facebook?.message}
          />
          <InputTextSocialLinks
            name="instagram"
            type="text"
            placeholder="Instagram"
            register={register}
            icon="instagram"
            required={false}
            error={errors.instagram?.message}
          />
        </div>
        <div className="block sm:flex w-full gap-4">
          <InputTextSocialLinks
            name="youtube"
            type="text"
            placeholder="youtube"
            register={register}
            icon="youtube"
            required={false}
            error={errors.youtube?.message}
          />
          <InputTextSocialLinks
            name="twitter"
            type="text"
            placeholder="Twitter"
            register={register}
            icon="twitter"
            required={false}
            error={errors.twitter?.message}
          />
        </div>
      </form>
    </>
  )
}

export default SocialLinksForm
