"use client"

import React, { useContext } from "react"
import Title from "@/components/RegistrationPage/Title"
import SignupForm from "@/components/Forms/Registration/SignupForm"
import { SignupContext, SignupContextProps } from "@/services/Context/SignupContext"
import SignupOtpForm from "@/components/Forms/Registration/SignupOtpForm"
import LeftSideNavbar from "../RegistrationNavbar"

const LeftSide = () => {
  const { isSignup } = useContext(SignupContext) as SignupContextProps
  return (
    <div className="registration-left">
      <LeftSideNavbar props={false} />
      <div className="registration-form">
        <Title text="Sign Up" />
        {isSignup ? <SignupForm /> : <SignupOtpForm />}
      </div>
    </div>
  )
}

export default LeftSide
