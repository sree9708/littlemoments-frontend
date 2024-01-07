import React from "react"
import { UseFormRegister } from "react-hook-form"
import { RiErrorWarningFill } from "react-icons/ri"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

type InputTextSocialLinksProps = {
  type: string
  name: string
  placeholder: string
  register: UseFormRegister<any>
  disabled?: boolean
  required: boolean
  icon?: string
  error?: string | undefined
}
const InputTextSocialLinks = ({
  type,
  name,
  placeholder,
  register,
  disabled,
  required,
  icon,
  error,
}: InputTextSocialLinksProps) => {
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
          className={`w-full autofill:bg-yellow-200 bg-transparent rounded-lg p-2 my-3 border-2  text-xl border-primary focus:outline-none focus:ring-transparent ${
            disabled && "disabled:bg-gray-100 disabled:cursor-not-allowed"
          }`}
          placeholder={placeholder}
          {...register(name, { required })}
        />
        <div className="btn absolute flex right-3 top-2 transform translate-y-5">
          <IconComponent />
        </div>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}

export default InputTextSocialLinks
