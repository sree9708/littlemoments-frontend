import React from "react"
import { UseFormRegister } from "react-hook-form"

type InputTextEditProps = {
  type: string
  name: string
  placeholder: string
  register: UseFormRegister<any>
  required: boolean
  disabled?: boolean
  error?: string | undefined
}
const InputTextEdit = ({
  type,
  name,
  placeholder,
  register,
  required,
  disabled,
  error,
}: InputTextEditProps) => {
  return (
    <div className="w-full ">
      <div className="flex w-full relative">
        <input
          type={type}
          className={`w-full  bg-transparent focus:outline-none focus:ring-transparent ${
            disabled ? "disabled:cursor-not-allowed" : " underline"
          }`}
          placeholder={placeholder}
          {...register(name, { required })}
          disabled={disabled}
        />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}

export default InputTextEdit
