import React from "react"

interface IBadgeProps {
  text: string
}

const Badge: React.FC<IBadgeProps> = ({ text }) => {
  return (
    <div className="rounded-full border-2 border-primary px-2 sm:px-3 text-xs sm:text-base w-fit bg-theme-color-3 -rotate-6">
      {text}
    </div>
  )
}

export default Badge
