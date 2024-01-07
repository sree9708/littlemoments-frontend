import React from "react"
import { UseFormRegister } from "react-hook-form"

type InputAgeEditProps = {
  name: string
  placeholder: string
  register: UseFormRegister<any>
  disabled: boolean
  required: boolean
  error: string | undefined
}

const InputAgeEdit = ({ name, placeholder, register, disabled, required, error }: InputAgeEditProps) => {
  return (
    <div className="w-full">
      <div className="flex relative">
        <select
          className={`w-full bg-transparent focus:outline-none focus:ring-transparent`}
          {...register(name, { required })}
          disabled={disabled}
        >
          <option value="">{placeholder}</option>
          {Array.from({ length: 101 }, (_, i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}

export default InputAgeEdit
