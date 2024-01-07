import React from "react"
import Title from "@/components/RegistrationPage/Title"
import AddPlaceForm from "@/components/Forms/AddPlace/AddPlaceForm"
import Tracker from "../Tracker"
import BusinessDetailsForm from "@/components/Forms/AddPlace/BusinessDetailsForm"

const BusinessDetailsSide = () => {
  return (
    <div className="registration-left">
      <Tracker />
      <div className="registration-form h-fit max-h-[650px] overflow-auto">
        <Title text="BUSINESS DETAILS" />
        <BusinessDetailsForm />
      </div>
    </div>
  )
}

export default BusinessDetailsSide
