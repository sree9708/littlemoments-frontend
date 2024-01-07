import React from "react"
import { UseFormRegister } from "react-hook-form"

type InputTextareaProps = {
  type: string
  name: string
  placeholder: string
  register: UseFormRegister<any>
  required: boolean
  disabled?: boolean
  error?: string | undefined
}
const InputTextarea = ({ name, placeholder, register, required, disabled, error }: InputTextareaProps) => {
  return (
    <div className="w-full">
      <div className="w-full flex relative">
        <textarea
          className={`w-full autofill:bg-yellow-200 bg-transparent rounded-lg p-3 my-3 border-2  text-xl border-primary focus:outline-none focus:ring-transparent ${
            disabled && "disabled:bg-gray-100 disabled:cursor-not-allowed"
          }`}
          placeholder={placeholder}
          {...register(name, { required })}
          disabled={disabled}
          rows={1} // Set the initial number of rows to 1
          style={{ resize: "none" }}
        />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}

export default InputTextarea
