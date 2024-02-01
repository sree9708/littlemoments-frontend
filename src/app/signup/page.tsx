import React from "react"
import SignupLeftSide from "@/layouts/RegistrationPage/Signup/SignupLeftSide"
import SignupProvider from "@/services/Context/SignupContext"
import RightSide from "@/layouts/RegistrationPage/RightSide"

const Page = () => {
  return (
    <SignupProvider>
      <div className="grid grid-cols-12 w-full h-screen">
        <SignupLeftSide />
        <RightSide text="SIGN UP & GET STARTED" />
      </div>
    </SignupProvider>
  )
}

export default Page
