import React from "react"
import Image from "next/image"
import RegistrationTitle from "../../CommonLayouts/RegistrationTitle"

const RightSide = () => {
  return (
    <div className="hidden md:block col-span-4 ">
      <div className="relative h-full">
        <Image
          className="object-cover object-center w-full h-full group-hover:scale-110 transition-transform duration-300"
          src="https://images.pexels.com/photos/2481670/pexels-photo-2481670.jpeg"
          layout="fill"
          alt="image1"
        />
        <RegistrationTitle text="LOGIN & GET STARTED" />
      </div>
    </div>
  )
}

export default RightSide
