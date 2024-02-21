import React, { Suspense } from "react"
import Image from "next/image"
import RegistrationTitle from "../CommonLayouts/RegistrationTitle"
import registrationImage from "../../../public/registeration-form.jpeg"

type RightSideProps = {
  text: string
}

const RightSide = ({ text }: RightSideProps) => {
  return (
    <div className="hidden md:block col-span-4 ">
      <div className="relative h-full fit">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center text-primary">Loading...</div>
          }
        >
          <Image
            className="w-full h-full"
            src={registrationImage}
            width={1920}
            height={1080}
            objectFit="cover"
            alt="image1"
            loading="lazy"
          />
          <RegistrationTitle text={text} />
        </Suspense>
      </div>
    </div>
  )
}

export default RightSide
