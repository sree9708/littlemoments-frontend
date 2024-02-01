import React from "react"
import Title from "@/components/RegistrationPage/Title"
import LoginPropsForm from "@/components/Forms/Registration/LoginPropsForm"
import LeftSideNavbar from "../../RegistrationNavbar"

const LeftSide = () => {
  return (
    <div className="registration-left">
      <LeftSideNavbar props={true} />
      <div className="registration-form">
        <Title text="LOGIN PROPS" />
        <LoginPropsForm />
      </div>
    </div>
  )
}

export default LeftSide
