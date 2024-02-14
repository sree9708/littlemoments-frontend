import React from "react"
import SignupLeftSide from "@/layouts/RegistrationPage/Signup/SignupLeftSide"
import SignupProvider from "@/services/Context/SignupContext"
const Page = () => {
  return (
    <SignupProvider>
      <SignupLeftSide />
    </SignupProvider>
  )
}

export default Page
