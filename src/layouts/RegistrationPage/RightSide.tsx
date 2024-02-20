import React from "react"
import Image from "next/image"
import RegistrationTitle from "../CommonLayouts/RegistrationTitle"

type RightSideProps = {
  text: string
}
const RightSide = ({ text }: RightSideProps) => {
  return (
    <div className="hidden md:block col-span-4 ">
      <div className="relative h-full fit">
        <Image
          className="w-full h-full group-hover:scale-110 transition-transform duration-300"
          src="https://images.pexels.com/photos/2481670/pexels-photo-2481670.jpeg"
          // layout="fill"
          width={1920}
          height={1080}
          objectFit="cover"
          alt="image1"
        />
        <RegistrationTitle text={text} />
      </div>
    </div>
  )
}

export default RightSide
