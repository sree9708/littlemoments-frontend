import React from "react"
import Title from "@/components/RegistrationPage/Title"
import Tracker from "../Tracker"
import InformationForm from "@/components/Forms/AddPlace/InformationForm"

const InformationLeftSide = () => {
  return (
    <div className="registration-left">
      <Tracker />
      <div className="registration-form h-fit max-h-[650px] overflow-auto">
        <Title text="Information" />
        <InformationForm />
      </div>
    </div>
  )
}

export default InformationLeftSide
