import { IoIosMail, IoMdCall } from "react-icons/io"
import ProfileImage from "@/components/ProfilePage/Props/Hero/ProfileImage"
import React from "react"

const HeroLazy = () => {
  return (
    <div className="relative mt-24 my-12 w-full flex flex-wrap gap-4 bg-secondary border-2 border-primary rounded-lg p-8 lg:p-12 drop-shadow-[10px_10px_0_rgba(0,0,0,1)]">
      <div className="flex w-fit justify-center ">
        <div className="relative rounded-full w-36 h-36">
          <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded-full">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-fit">
        <div className="font-title text-title-sm my-4">
          <div className="h-10 bg-gray-300 rounded-full w-full animate-pulse"></div>
        </div>
        <div className="flex flex-wrap mt-4 gap-4">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4">
              <IoIosMail />
            </div>
            <div className="aspect-[10/1] h-5 bg-gray-300 animate-pulse rounded-full"></div>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4">
              <IoMdCall />
            </div>
            <div className="aspect-[10/1] h-5 bg-gray-300 animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroLazy
