import EditModal from "@/components/ProfilePage/Props/Hero/EditModal"
import ProfileDetails from "@/components/ProfilePage/Props/Hero/ProfileDetails"
import ProfileImage from "@/components/ProfilePage/Props/Hero/ProfileImage"
import React from "react"

const Hero = () => {
  return (
    <div className="relative mt-24 my-12 w-full flex flex-wrap gap-4 bg-secondary border-2 border-primary rounded-lg p-8 lg:p-12 drop-shadow-[10px_10px_0_rgba(0,0,0,1)]">
      <EditModal />
      <ProfileImage />
      <ProfileDetails />
    </div>
  )
}

export default Hero
