import React from "react"
import RightSide from "@/layouts/RegistrationPage/RightSide"
import LoginPropsLeftSide from "@/layouts/RegistrationPage/Props/Login/LoginPropsLeftSide"

const page = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen">
      <LoginPropsLeftSide />
      <RightSide text="LOGIN PROPS & GET STARTED" />
    </div>
  )
}

export default page
