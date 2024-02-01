import React from "react"
import Image from "next/image"
import { useAppSelector } from "@/hooks/useStore"
import displayImage from "../../../../../public/avatar.jpg"

const ProfileImage = () => {
  const propInformation = useAppSelector(state => state.prop?.propInformations)

  return (
    <div className="flex w-fit justify-center ">
      <div className="relative rounded-full w-36 h-36">
        <Image
          src={propInformation?.displayImages ? propInformation?.displayImages[0] : displayImage}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
          className="rounded-full w-full h-full"
        />
      </div>
    </div>
  )
}

export default ProfileImage
