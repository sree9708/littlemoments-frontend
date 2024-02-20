import React from "react"
import Title from "@/components/RegistrationPage/Title"
import AddPlaceForm from "@/components/Forms/AddPlace/AddPlaceForm"
import Tracker from "../Tracker"

const PlaceOwnerLeftSide = () => {
  return (
    <div className="registration-left">
      <Tracker />
      <div className="registration-form h-fit max-h-[650px] overflow-auto">
        <Title text="Place Details" />
        <AddPlaceForm />
      </div>
    </div>
  )
}

export default PlaceOwnerLeftSide
