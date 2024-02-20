import React from "react"
import Title from "@/components/RegistrationPage/Title"
import Tracker from "../Tracker"
import UploadImagesForm from "@/components/Forms/AddPlace/UploadImagesForm"

const UploadImagesLeftSide = () => {
  return (
    <div className="registration-left">
      <Tracker />
      <div className="registration-form h-fit max-h-[650px] overflow-auto">
        <Title text="Upload Image" />
        <UploadImagesForm />
      </div>
    </div>
  )
}

export default UploadImagesLeftSide
