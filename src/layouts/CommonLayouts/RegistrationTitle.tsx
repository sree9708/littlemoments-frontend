import React from "react"

interface IRegistrationTitleProps {
  text: string
}

const RegistrationTitle: React.FC<IRegistrationTitleProps> = ({ text }) => {
  return (
    <div className="absolute w-full h-screen flex flex-col justify-center items-center">
      <div className="font-title text-center text-title-sm lg:text-title-md text-secondary drop-shadow-sm">
        {text}
      </div>
      <div className="p-2 px-4 border-2 border-primary flex justify-center text-center font-bold text-xl bg-theme-color-4 rounded-full">
        1000+ places to expolre
      </div>
    </div>
  )
}

export default RegistrationTitle
