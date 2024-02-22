"use client"

import { DetailPageContext, DetailPageContextProps } from "@/services/Context/DetailPageContext"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useContext } from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-scroll"
import defaulImage from "../../../../public/default-images.jpeg"

const Hero = ({ placeDetails }: { placeDetails: any }) => {
  const { setMoreVideos } = useContext(DetailPageContext) as DetailPageContextProps

  const { push } = useRouter()

  const handleListingVideo = () => {
    setMoreVideos(true)
    // push("#listing-videos")
  }

  return (
    <div className="h-full mt-28">
      <div className="h-full mt-12 grid grid-cols-12 gap-4">
        <div className="h-full col-span-12 md:col-span-7">
          <div className="h-60 sm:h-96 overflow-hidden rounded-lg md:h-full w-full relative">
            <div className="absolute top-0 left-0 w-full h-full after:absolute after:inset-0 after:from-black after:to-transparent after:bg-gradient-to-t after:opacity-50">
              <Image
                src={placeDetails?.displayImages?.[0] ?? defaulImage}
                alt={placeDetails?.placeName || "littlemoments"}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="shadow-2xl w-full h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover rounded-lg"
              />
            </div>
            <div className="absolute top-4 right-4 bg-theme-4 p-1 px-3 rounded-full border border-primary font-bold">
              Popular
            </div>
            {/* <div className="absolute bottom-6 left-6 text-secondary font-title drop-shadow-md text-title-sm">
              PLACE
            </div> */}
          </div>
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="h-full grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-4">
            <div className=" cursor-pointer rounded-lg overflow-hidden w-full aspect-[5/4]">
              <Image
                src={placeDetails?.displayImages?.[1] || placeDetails?.displayImages?.[0] || defaulImage}
                alt={placeDetails?.placeName ? placeDetails?.placeName : "littlemoments"}
                width={500}
                height={500}
                className="w-full h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover "
              />
            </div>
            <div className="cursor-pointer rounded-lg overflow-hidden w-full aspect-[5/4]">
              <Image
                src={placeDetails?.displayImages?.[2] || placeDetails?.displayImages?.[0] || defaulImage}
                alt={placeDetails?.placeName ? placeDetails?.placeName : "littlemoments"}
                width={500}
                height={500}
                className="w-full h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover "
              />
            </div>
            <div className="cursor-pointer rounded-lg overflow-hidden w-full aspect-[5/4]">
              <Image
                src={placeDetails?.displayImages?.[3] || placeDetails?.displayImages?.[0] || defaulImage}
                alt={placeDetails?.placeName ? placeDetails?.placeName : "littlemoments"}
                width={500}
                height={500}
                className="w-full h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover "
              />
            </div>
            <Link
              to="listing-videos"
              smooth={true}
              onClick={handleListingVideo}
              className="w-full aspect-[5/4] cursor-pointer relative"
            >
              {/* <div className=" w-full aspect-[5/4]  cursor-pointer relative" onClick={handleListingVideo}> */}
              <Image
                src={placeDetails?.displayImages?.[4] || placeDetails?.displayImages?.[0] || defaulImage}
                alt={placeDetails?.placeName ? placeDetails?.placeName : "more photos"}
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black transition-opacity duration-300 ease-in-out opacity-60 hover:opacity-90 rounded-lg">
                <div className="w-full h-full text-lg text-secondary flex items-center justify-center">
                  <div className="flex items-center justify-center font-semibold">
                    more
                    <div className="ms-3">
                      <FaArrowRightLong />
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </Link>
            {/* </> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
