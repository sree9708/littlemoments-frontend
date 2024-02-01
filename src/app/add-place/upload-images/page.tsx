import React from "react"
import RightSide from "@/layouts/RegistrationPage/RightSide"
import UploadImagesLeftSide from "@/layouts/AddPlacePage/UploadImages/UploadImagesLeftSide"

const page = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen">
      <UploadImagesLeftSide />
      <RightSide text="REGISTRATION FORM" />
    </div>
  )
}

export default page
