import React, { useState } from "react"
import { FaRegHeart } from "react-icons/fa6"
import { IoShareSocialOutline } from "react-icons/io5"

export const InformationsRightSide = () => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false)

  const handleHeart = () => {
    setIsFavourite(!isFavourite)
  }

  return (
    <div className=" sm:col-span-2  mt-4 md:m-0 ">
      <div className="flex gap-4 md:justify-end">
        <div
          className={`p-3 ${
            isFavourite ? "bg-theme-color-1" : "bg-background"
          } cursor-pointer border-2  border-primary rounded-lg drop-shadow-[5px_5px_0_rgba(0,0,0,1)]`}
          onClick={handleHeart}
        >
          <FaRegHeart />
        </div>
        <div
          className="p-3 bg-background hover:bg-theme-color-4 cursor-pointer border-2 border-primary rounded-lg drop-shadow-[5px_5px_0_rgba(0,0,0,1)]"
          onClick={async () => {
            if (navigator.share) {
              try {
                await navigator.share({
                  title: "Title of the content",
                  text: "Text of the content",
                  url: window.location.href,
                })
              } catch (error) {
                console.error("Something went wrong sharing the blog", error)
              }
            } else {
              console.log("Web Share API not supported")
            }
          }}
        >
          <IoShareSocialOutline />
        </div>
      </div>
      {/* <div className="mt-4 sm:mt-8 flex md:justify-end">October 4, 2021</div> */}
    </div>
  )
}
