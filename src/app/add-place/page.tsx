import PlaceOwnerLeftSide from "@/layouts/AddPlacePage/PlaceOwner/PlaceOwnerLeftSide"
import RightSide from "@/layouts/RegistrationPage/RightSide"
import React from "react"

const Page = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen">
      <PlaceOwnerLeftSide />
      <RightSide text="REGISTRATION FORM" />
    </div>
  )
}

export default Page
