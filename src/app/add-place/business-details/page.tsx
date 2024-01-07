import React from "react"
import BusinessDetailsLeftSide from "@/layouts/AddPlacePage/BusinessDetails/BusinessDetailsLeftSide"
import RightSide from "@/layouts/RegistrationPage/RightSide"

const page = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen">
      <BusinessDetailsLeftSide />
      <RightSide text="REGISTRATION FORM" />
    </div>
  )
}

export default page
