import React from "react"
import { UseFormRegister, UseFormWatch } from "react-hook-form"

type InputAgeProps = {
  name: string
  placeholder: string
  register: UseFormRegister<any>
  watch: UseFormWatch<any>
  required: boolean
  error?: string | undefined
}

const InputAge = ({ name, placeholder, register, watch, required, error }: InputAgeProps) => {
  const selectedValue = watch(name, "")
  return (
    <div className="w-full my-3">
      <div className="flex relative">
        <select
          className={`w-full bg-transparent rounded-lg p-2 border-2  text-xl border-primary focus:outline-none focus:ring-transparent ${
            selectedValue !== "" ? "text-black" : "text-gray-400"
          }`}
          {...register(name, { required })}
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

export default InputAge
