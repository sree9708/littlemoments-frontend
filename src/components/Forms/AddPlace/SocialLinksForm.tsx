"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import RegistrationButton from "../../Buttons/RegistrationButton"
import { useContext, useEffect } from "react"
import { TrackerContext, TrackerContextProps } from "@/services/Context/TrackerContext"
import { useRouter } from "next/navigation"
import InputTextSocialLinks from "@/components/Inputs/InputTextSocialLinks"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { addPlace, addSocialLinks } from "@/services/Redux/reducers/propSlice"
import { FaArrowLeftLong } from "react-icons/fa6"

const schema = yup
  .object({
    fb: yup
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
  const dispatch = useAppDispatch()
  const propDetails = useAppSelector(state => state.prop.propDetails)
  const { setIsTracker } = useContext(TrackerContext) as TrackerContextProps

  useEffect(() => {
    setIsTracker(5)
  }, [setIsTracker])

  const onSubmitSignup = async (data: any) => {
    console.log("data", data)
    try {
      dispatch(addSocialLinks({ socialLinks: data }))
      await dispatch(addPlace())
    } catch (error) {
      console.log(error)
    }
    // push("/")
  }

  const handleBack = () => {
    push("/add-place/upload-images")
  }

  return (
    <>
      <form className="py-8" onSubmit={handleSubmit(onSubmitSignup)}>
        <InputTextSocialLinks
          name="fb"
          type="text"
          placeholder="Facebook"
          register={register}
          icon="fb"
          required={false}
          error={errors.fb?.message}
          defaultValue={propDetails?.socialLinks?.fb}
        />
        <InputTextSocialLinks
          name="instagram"
          type="text"
          placeholder="Instagram"
          register={register}
          icon="instagram"
          required={false}
          error={errors.instagram?.message}
          defaultValue={propDetails?.socialLinks?.instagram}
        />
        <InputTextSocialLinks
          name="youtube"
          type="text"
          placeholder="youtube"
          register={register}
          icon="youtube"
          required={false}
          error={errors.youtube?.message}
          defaultValue={propDetails?.socialLinks?.youtube}
        />
        <InputTextSocialLinks
          name="twitter"
          type="text"
          placeholder="Twitter"
          register={register}
          icon="twitter"
          required={false}
          error={errors.twitter?.message}
          defaultValue={propDetails?.socialLinks?.twitter}
        />
        <div className="flex gap-4">
          <button
            type="button"
            className="w-fit flex items-center gap-2 bg-background text-primary mt-8 p-4 rounded-md border-2 border-primary text-2xl font-bold"
            onClick={handleBack}
          >
            <FaArrowLeftLong />
            Back
          </button>
          <RegistrationButton text="Save" />
        </div>
      </form>
    </>
  )
}

export default SocialLinksForm
