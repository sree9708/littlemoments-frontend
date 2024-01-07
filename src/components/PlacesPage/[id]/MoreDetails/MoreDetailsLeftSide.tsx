"use client"

import { DetailPageContext, DetailPageContextProps } from "@/services/Context/DetailPageContext"
import Image from "next/image"
import React, { useContext, useEffect, useState } from "react"
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6"

const images: {
  [key: number]: string
} = {
  0: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  1: "https://images.pexels.com/photos/2845890/pexels-photo-2845890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  2: "https://images.pexels.com/photos/3603453/pexels-photo-3603453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  3: "https://images.pexels.com/photos/18781943/pexels-photo-18781943/free-photo-of-footbridge-over-shantang-river-in-suzhou-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}

export const MoreDetailsLeftSide = () => {
  const [overview, setOverview] = useState<boolean>(false)
  const [features, setFeatures] = useState<boolean>(false)
  const { setSelectedImage, moreVideos, setMoreVideos } = useContext(
    DetailPageContext,
  ) as DetailPageContextProps

  const handleSelectedImage = (key: number) => {
    setSelectedImage(key)
  }

  const handleOverview = () => {
    setOverview(!overview)
    // if(!overview){
    //     setFeatures(false)
    //     setMoreVideos(false)
    // }
  }
  const handleFeatures = () => {
    setFeatures(!features)
    // if(!features){
    //     setOverview(false)
    //     setMoreVideos(false)
    // }
  }
  const handleVideo = () => {
    setMoreVideos(!moreVideos)
    // if(!moreVideos){
    //     setOverview(false)
    //     setFeatures(false)
    // }
  }

  return (
    <div id="listing-videos" className="sm:col-span-8">
      <div>
        <div className="flex w-full justify-between items-center" onClick={handleOverview}>
          <div className="text-5xl font-title">OVERVIEW</div>
          <div className="text-xl cursor-pointer">{overview ? <FaCircleMinus /> : <FaCirclePlus />}</div>
        </div>
        <div
          className={`transition-opacity duration-300 ease-in-out  overflow-hidden ${
            overview ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
          }`}
        >
          <div className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea autem iure, et facere quae quos
            asperiores non esse corrupti eius praesentium, sunt aspernatur magni? Id, veniam. Nisi minima, qui
            molestiae impedit placeat maxime quae deleniti harum sequi est porro laudantium et. Dolore quaerat
            sequi laborum doloribus animi possimus doloremque.
          </div>
        </div>
        <div className="w-full border-t border-gray-500 my-4"></div>
      </div>
      <div>
        <div className="flex w-full justify-between items-center">
          <div className="text-5xl font-title">FEATURES</div>
          <div className="text-xl cursor-pointer" onClick={handleFeatures}>
            {features ? <FaCircleMinus /> : <FaCirclePlus />}
          </div>
        </div>
        <div
          className={`transition-opacity duration-300 ease-in-out  overflow-hidden ${
            features ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
          }`}
        >
          <div className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea autem iure, et facere quae quos
            asperiores non esse corrupti eius praesentium, sunt aspernatur magni? Id, veniam. Nisi minima, qui
            molestiae impedit placeat maxime quae deleniti harum sequi est porro laudantium et. Dolore quaerat
            sequi laborum doloribus animi possimus doloremque.
          </div>
        </div>
        <div className="w-full border-t border-gray-500 my-4"></div>
      </div>
      <div>
        <div className="flex w-full justify-between items-center">
          <div className="text-5xl font-title">LISTING VIDEOS</div>
          <div className="text-xl cursor-pointer" onClick={handleVideo}>
            {moreVideos ? <FaCircleMinus /> : <FaCirclePlus />}
          </div>
        </div>
        <div
          className={`transition-opacity duration-300 ease-in-out  overflow-hidden ${
            moreVideos ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
          }`}
        >
          <div className="my-2">
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
              {Object.keys(images).map((key: any, index) => (
                <div
                  key={key}
                  className="cursor-pointer rounded-lg overflow-hidden w-full h-32"
                  onClick={() => handleSelectedImage(index)}
                >
                  <Image
                    src={images[key]}
                    alt={`image${key}`}
                    width={500}
                    height={500}
                    className="w-full h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-500 my-4"></div>
      </div>
    </div>
  )
}
