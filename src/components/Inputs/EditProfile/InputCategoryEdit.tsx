import React from "react"
import { UseFormRegister } from "react-hook-form"

type InputCategoryEditProps = {
  name: string
  category: string[]
  placeholder: string
  register: UseFormRegister<any>
  disabled?: boolean
  required: boolean
  error: string | undefined
}

const InputCategoryEdit = ({
  name,
  category,
  placeholder,
  register,
  disabled,
  required,
  error,
}: InputCategoryEditProps) => {
  return (
    <div className="w-full">
      <div className="flex relative">
        <select
          className={`w-full bg-transparent focus:outline-none focus:ring-transparent`}
          {...register(name, { required })}
          disabled={disabled}
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

export default InputCategoryEdit
