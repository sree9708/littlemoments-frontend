import React, { useEffect } from "react"
import { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form"

type InputCategoryProps = {
  name: string
  category: string[]
  placeholder: string
  register: UseFormRegister<any>
  watch: UseFormWatch<any>
  setValue: UseFormSetValue<any>
  required: boolean
  error?: string | undefined
  defaultValue?: string
}

const InputCategory = ({
  name,
  category,
  placeholder,
  register,
  watch,
  setValue,
  required,
  error,
  defaultValue,
}: InputCategoryProps) => {
  const selectedValue = watch(name, "")
  useEffect(() => {
    setValue(name, defaultValue)
  }, [name, defaultValue, setValue])
  return (
    <div className="w-full my-3">
      <div className="flex relative">
        <select
          className={`w-full bg-transparent rounded-lg p-2 border-2  text-xl border-primary focus:outline-none focus:ring-transparent ${
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
