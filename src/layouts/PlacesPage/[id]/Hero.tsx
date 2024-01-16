"use client"

import { DetailPageContext, DetailPageContextProps } from "@/services/Context/DetailPageContext"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useContext, useEffect } from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getPlaceById } from "@/services/Redux/reducers/placeSlice"

const images: {
  [key: number]: string
} = {
  0: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  1: "https://images.pexels.com/photos/2845890/pexels-photo-2845890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  2: "https://images.pexels.com/photos/3603453/pexels-photo-3603453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  3: "https://images.pexels.com/photos/18781943/pexels-photo-18781943/free-photo-of-footbridge-over-shantang-river-in-suzhou-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}

const Hero = () => {
  const { setMoreVideos } = useContext(DetailPageContext) as DetailPageContextProps

  const { push } = useRouter()

  const handleListingVideo = () => {
    setMoreVideos(true)
    push("#listing-videos")
  }

  // const dispatch = useAppDispatch()
  const placeDetails = useAppSelector(state => state.place.placeDetails)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       await dispatch(getPlaceById(id))
  //     } catch (error: any) {
  //       push("/")
  //       console.log(error.message)
  //     }
  //   }
  //   fetchData()
  // }, [])

  return (
    <div className="h-full">
      <div className="h-full mt-12 sm:mt-32 grid grid-cols-12 gap-4">
        <div className="h-full col-span-12 md:col-span-7">
          {placeDetails && placeDetails.displayImages && placeDetails.displayImages[0] && (
            <div className="h-60 sm:h-96 overflow-hidden rounded-lg md:h-full w-full relative">
              <div className="absolute top-0 left-0 w-full h-full after:absolute after:inset-0 after:from-black after:to-transparent after:bg-gradient-to-t after:opacity-50">
                <Image
                  src={placeDetails.displayImages[0]}
                  alt={placeDetails?.placeName || "littlemoments"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="shadow-2xl w-full h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover rounded-lg"
                />
              </div>
              <div className="absolute top-4 right-4 bg-theme-color-4 p-1 px-3 rounded-full border border-primary font-bold">
                Popular
              </div>
              <div className="absolute bottom-6 left-6 text-secondary font-title drop-shadow-md text-title-sm">
                PLACE
              </div>
            </div>
          )}
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="h-full grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-4 lg:gap-2">
            {placeDetails && placeDetails.displayImages && (
              <>
                <div className="cursor-pointer rounded-lg overflow-hidden w-full h-32 sm:h-60">
                  <Image
                    src={placeDetails?.displayImages[1] || placeDetails.displayImages[0]}
                    alt={placeDetails?.placeName ? placeDetails?.placeName : "littlemoments"}
                    width={500}
                    height={500}
                    className="w-full h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover "
                  />
                </div>
                <div className="cursor-pointer rounded-lg overflow-hidden w-full h-32 sm:h-60">
                  <Image
                    src={placeDetails?.displayImages[2] || placeDetails.displayImages[0]}
                    alt={placeDetails?.placeName ? placeDetails?.placeName : "littlemoments"}
                    width={500}
                    height={500}
                    className="w-full h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover "
                  />
                </div>
                <div className="cursor-pointer rounded-lg overflow-hidden w-full h-32 sm:h-60">
                  <Image
                    src={placeDetails?.displayImages[3] || placeDetails.displayImages[0]}
                    alt={placeDetails?.placeName ? placeDetails?.placeName : "littlemoments"}
                    width={500}
                    height={500}
                    className="w-full h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover "
                  />
                </div>
                <div className=" w-full h-32 sm:h-60  cursor-pointer relative" onClick={handleListingVideo}>
                  <Image
                    src={placeDetails?.displayImages[4] || placeDetails.displayImages[0]}
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
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
