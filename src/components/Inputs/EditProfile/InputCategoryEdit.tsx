import React, { useEffect } from "react"
import { UseFormRegister, UseFormSetValue, UseFormWatch } from "react-hook-form"

type InputCategoryEditProps = {
  name: string
  category: string[]
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
  category,
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
          <option value={defaultValue}>{defaultValue}</option>
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

export default InputCategoryEdit
