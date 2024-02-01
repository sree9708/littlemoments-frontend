import React from "react"
import Title from "@/components/RegistrationPage/Title"
import LoginForm from "@/components/Forms/Registration/LoginForm"
import LeftSideNavbar from "../RegistrationNavbar"

const LeftSide = () => {
  return (
    <div className="registration-left">
      <LeftSideNavbar props={false} />
      <div className="registration-form">
        <Title text="LOGIN" />
        <LoginForm />
      </div>
    </div>
  )
}

export default LeftSide
