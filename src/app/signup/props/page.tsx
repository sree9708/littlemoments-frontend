import React from "react"
import RightSide from "@/layouts/RegistrationPage/RightSide"
import SignupPropsLeftSide from "@/layouts/RegistrationPage/Props/Signup/SignupPropsLeftSide"

const Page = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen">
      <SignupPropsLeftSide />
      <RightSide text="SIGN UP PROPS & GET STARTED" />
    </div>
  )
}

export default Page
