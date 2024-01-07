import React from "react"
import { HiMapPin } from "react-icons/hi2"
import { IoMdCall } from "react-icons/io"

const ProfileDetails = () => {
  return (
    <div className="w-fit">
      <div className="font-title text-title-sm my-4">TSUKISHIMA MONJA STREET</div>
      <div className="flex flex-wrap mt-4 gap-4">
        <div className="flex items-center gap-1">
          <HiMapPin />
          Texes, United States
        </div>
        <div className="flex items-center gap-1">
          <IoMdCall />
          <a href="tel:+919562886328" className="hover:underline">
            +91 9562 886 328
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails
