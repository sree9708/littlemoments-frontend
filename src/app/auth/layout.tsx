import RightSide from "@/layouts/RegistrationPage/RightSide"
import React from "react"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid grid-cols-12 w-full h-screen">
      {children}
      <RightSide text="REGISTRATION FORM" />
    </div>
  )
}

export default RootLayout
