import React from "react"

interface IRegistrationTitleProps {
  text: string
}

const RegistrationTitle: React.FC<IRegistrationTitleProps> = ({ text }) => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen flex flex-col justify-center items-center">
      <div className="w-full font-title text-center text-title-sm lg:text-title-md text-secondary drop-shadow  overflow-clip break-words">
        {text}
      </div>
      <div className="p-2 px-4 border-2 border-primary flex justify-center text-center font-bold text-xl bg-theme-4 rounded-full">
        1000+ places to explore
      </div>
    </div>
  )
}

export default RegistrationTitle
