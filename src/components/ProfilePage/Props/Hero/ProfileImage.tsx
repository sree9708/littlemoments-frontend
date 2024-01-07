import React from "react"
import Image from "next/image"

const ProfileImage = () => {
  return (
    <div className="flex w-fit justify-center ">
      <div className="relative rounded-full w-36 h-36">
        <Image
          src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
