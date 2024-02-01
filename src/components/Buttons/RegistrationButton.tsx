import React from "react"

type RegistrationButtonProps = {
  text: string
}

const RegistrationButton = ({ text }: RegistrationButtonProps) => {
  return (
    <button
      type="submit"
      className="w-full bg-theme-color-3 mt-8 p-4 rounded-md border-2 border-primary text-2xl text-secondary font-bold"
    >
      {text}
    </button>
  )
}

export default RegistrationButton
