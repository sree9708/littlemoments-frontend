import React from "react"
import { UseFormRegister } from "react-hook-form"
import { RiErrorWarningFill } from "react-icons/ri"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

type InputTextSocialLinksEditProps = {
  type: string
  name: string
  placeholder: string
  register: UseFormRegister<any>
  required: boolean
  icon?: string
  disabled?: boolean
  error: string | undefined
}
const InputTextSocialLinksEdit = ({
  type,
  name,
  placeholder,
  register,
  required,
  icon,
  disabled,
  error,
}: InputTextSocialLinksEditProps) => {
  const IconComponent = (() => {
    switch (icon) {
      case "facebook":
        return FaFacebookF
      case "instagram":
        return FaInstagram
      case "youtube":
        return FaYoutube
      case "twitter":
        return FaXTwitter
      default:
        return RiErrorWarningFill
    }
  })()

  return (
    <div className="w-full">
      <div className="flex relative">
        <input
          type={type}
          className={`w-full ps-6 bg-transparent focus:outline-none focus:ring-transparent ${
            disabled ? "disabled:cursor-not-allowed" : " underline"
          }`}
          placeholder={placeholder}
          {...register(name, { required })}
          disabled={disabled}
        />
        <div className="btn absolute flex top-1 left-0 transform ">
          <IconComponent />
        </div>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}

export default InputTextSocialLinksEdit
