import React, { useEffect } from "react"
import { UseFormRegister, UseFormSetValue } from "react-hook-form"

type InputCategoryEditProps = {
  name: string
  fieldName: string
  categories: any[]
  placeholder: string
  register: UseFormRegister<any>
  setValue: UseFormSetValue<any>
  disabled?: boolean
  required: boolean
  error: string | undefined
  defaultValue?: string
}

const InputCategoryEdit = ({
  name,
  fieldName,
  categories,
  placeholder,
  register,
  setValue,
  disabled,
  required,
  error,
  defaultValue,
}: InputCategoryEditProps) => {
  useEffect(() => {
    setValue(name, defaultValue)
  }, [name, defaultValue, setValue])


  return (
    <div className="w-full">
      <div className="flex relative">
        <select
          className={`w-full bg-transparent focus:outline-none focus:ring-transparent`}
          {...register(name, { required })}
          disabled={disabled}
        >
          <option value="">{placeholder}</option>
          {categories.map((category, index) => (
            <option key={index} value={category.id}>
              {category[fieldName]}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}

export default InputCategoryEdit
