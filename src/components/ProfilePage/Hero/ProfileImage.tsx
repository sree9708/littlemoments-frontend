import React from "react"
import Image from "next/image"
import maleAvatar from "../../../../public/avatar.jpg"
import femaleAvatar from "../../../../public/avatar-women.jpg"
import { useAppSelector } from "@/hooks/useStore"

const ProfileImage = () => {
  const userInformations = useAppSelector(state => state.user?.userInformations)

  return (
    <div className="flex w-fit justify-center ">
      <div className="relative rounded-full w-36 h-36 drop-shadow-2xl shadow-xl">
        <Image
          src={userInformations?.gender === "male" ? maleAvatar : femaleAvatar}
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
