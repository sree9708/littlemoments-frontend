import React, { useEffect } from "react"
import { UseFormRegister, UseFormWatch } from "react-hook-form"

type InputCategoryProps = {
  name: string
  category: string[]
  placeholder: string
  register: UseFormRegister<any>
  watch: UseFormWatch<any>
  required: boolean
  error?: string | undefined
}

const InputCategory = ({
  name,
  category,
  placeholder,
  register,
  watch,
  required,
  error,
}: InputCategoryProps) => {
  const selectedValue = watch(name, "")
  return (
    <div className="w-full">
      <div className="flex relative">
        <select
          className={`w-full bg-transparent rounded-lg p-2 my-3 border-2  text-xl border-primary focus:outline-none focus:ring-transparent ${
            selectedValue !== "" ? "text-black" : "text-gray-400"
          } `}
          {...register(name, { required })}
        >
          <option value="">{placeholder}</option>
          {category.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}

export default InputCategory
