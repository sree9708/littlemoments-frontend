import React, { useEffect, useRef } from "react"
import { UseFormRegister } from "react-hook-form"

type InputTextareaProfileEditProps = {
  type: string
  name: string
  placeholder: string
  register: UseFormRegister<any>
  required: boolean
  disabled?: boolean
  error?: string | undefined
}

const InputTextareaProfileEdit = ({
  name,
  placeholder,
  register,
  required,
  disabled,
  error,
}: InputTextareaProfileEditProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "inherit"
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  useEffect(() => {
    const textarea = textareaRef.current
    if (textarea) {
      handleInput({ target: textarea } as React.ChangeEvent<HTMLTextAreaElement>)
    }
  }, [])

  return (
    <div className="w-full">
      <div className="w-full flex relative">
        <textarea
          className={`w-full bg-transparent focus:outline-none focus:ring-transparent ${
            disabled ? "disabled:cursor-not-allowed" : " underline"
          }`}
          placeholder={placeholder}
          {...register(name, { required })}
          disabled={disabled}
          rows={1}
          // style={{ resize: "" }}
          onInput={handleInput}
        />
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  )
}

export default InputTextareaProfileEdit
