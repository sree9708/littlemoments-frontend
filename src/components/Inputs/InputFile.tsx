import React from "react"
import { UseFormRegister } from "react-hook-form"

type InputFileProps = {
  type: string
  label: string
  name: string
  register: UseFormRegister<any>
  required: boolean
  error?: string | undefined
  // onFileChange: (file: File | null) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputFile = ({ type, label, name, register, required, error, onChange }: InputFileProps) => {
  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0] || null
  //   onFileChange(file)
  // }
  return (
    <div className="w-full">
      <div className="w-full my-3">
        <label className="font-semibold text-gray-600">{label}</label>
        <input
          type={type}
          className="w-full autofill:bg-yellow-200 rounded-sm pb-2 border-b text-xl border-primary focus:outline-none focus:ring-transparent 
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-base file:font-semibold
            file:bg-theme-3 file:text-secondary
            hover:file:bg-primary"
          {...register(name, { required })}
          // onChange={handleFileChange}
          onChange={onChange}
        />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}

export default InputFile
