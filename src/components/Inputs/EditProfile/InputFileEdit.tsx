import React, { useState } from "react"
import { UseFormRegister } from "react-hook-form"
import { TbUpload } from "react-icons/tb"

type InputFileEditProps = {
  type: string
  label: string
  name: string
  filename?: string
  register: UseFormRegister<any>
  required: boolean
  disabled?: boolean
  error: string | undefined
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const InputFileEdit = ({
  type,
  name,
  filename,
  register,
  required,
  disabled,
  error,
  onChange,
}: InputFileEditProps) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div>{filename}</div>
      {/* <label className={`${disabled ? "hidden" : "block"} cursor-pointer`} htmlFor={name}>
        <TbUpload />
        <input
          type={type}
          id={name}
          className="w-full hidden bg-transparent focus:outline-none focus:ring-transparent 
            // file:mr-4 file:py-2
            // file:rounded-md file:border-0
            // file:text-sm file:font-semibold
            // file:bg-theme-color-3 file:text-secondary
            // hover:file:bg-primary"
          {...register(name, { required })}
          onChange={onChange}
        />
      </label> */}
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}

export default InputFileEdit
