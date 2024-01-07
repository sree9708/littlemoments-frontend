import React from "react"
import Title from "@/components/RegistrationPage/Title"
import Tracker from "../Tracker"
import UploadImagesForm from "@/components/Forms/AddPlace/UploadImagesForm"
import SocialLinksForm from "@/components/Forms/AddPlace/SocialLinksForm"

const SocialLinksLeftSide = () => {
  return (
    <div className="registration-left">
      <Tracker />
      <div className="registration-form h-fit max-h-[650px] overflow-auto">
        <Title text="Social Links" />
        <SocialLinksForm />
      </div>
    </div>
  )
}

export default SocialLinksLeftSide
