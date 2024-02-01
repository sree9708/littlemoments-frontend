import React from "react"
import RightSide from "@/layouts/RegistrationPage/RightSide"
import SocialLinksLeftSide from "@/layouts/AddPlacePage/SocialLinks/SocialLinksLeftSide"

const Page = () => {
  return (
    <div className="grid grid-cols-12 w-full h-screen">
      <SocialLinksLeftSide />
      <RightSide text="REGISTRATION FORM" />
    </div>
  )
}

export default Page
