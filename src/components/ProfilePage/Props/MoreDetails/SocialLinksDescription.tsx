import RegistrationButton from "@/components/Buttons/RegistrationButton"
import InputTextSocialLinksEdit from "@/components/Inputs/EditProfile/InputTextSocialLinksEdit"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { updatePropSocialLinks } from "@/services/Redux/reducers/propSlice"
import { yupResolver } from "@hookform/resolvers/yup"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"

const schema = yup
  .object({
    fb: yup
      .string()
      .url("Please enter a valid URL")
      .min(10, "Facebook must be at least 10 characters.")
      .max(100, "Facebook must not exceed 20 characters."),
    instagram: yup
      .string()
      .url("Please enter a valid URL")
      .min(10, "Instagram must be at least 10 characters.")
      .max(100, "Instagram must not exceed 20 characters."),
    youtube: yup
      .string()
      .url("Please enter a valid URL")
      .min(10, "Youtube must be at least 10 characters.")
      .max(100, "Youtube must not exceed 20 characters."),
    twitter: yup
      .string()
      .url("Please enter a valid URL")
      .min(10, "Twitter must be at least 10 characters.")
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

  const dispatch = useAppDispatch()
  const propInformation = useAppSelector(state => state.prop?.propInformations)

  useEffect(() => {
    setValue("fb", propInformation?.socialLinks?.fb || "")
    setValue("instagram", propInformation?.socialLinks?.instagram || "")
    setValue("youtube", propInformation?.socialLinks?.youtube || "")
    setValue("twitter", propInformation?.socialLinks?.twitter || "")
  }, [setValue])

  const onSubmitSignup = async (data: any) => {
    await dispatch(
      updatePropSocialLinks({
        id: propInformation?._id,
        data,
      }),
    )
    try {
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="pt-6">
      <form onSubmit={handleSubmit(onSubmitSignup)}>
        <div className="block sm:flex w-full gap-4 my-4">
          <div className="w-full flex flex-wrap gap-2 border-2 border-primary p-2 rounded-lg">
            <div className="flex-grow opacity-70">
              <InputTextSocialLinksEdit
                name="fb"
                type="text"
                placeholder="Facebook"
                register={register}
                disabled={!isEdit}
                icon="facebook"
                required={false}
                error={errors.fb?.message}
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
        {isEdit && <RegistrationButton text="Save" />}
      </form>
    </div>
  )
}

export default SocialLinksDescription
