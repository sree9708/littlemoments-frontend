"use client"

import { useAppSelector } from "@/hooks/useStore"
import { DetailPageContext, DetailPageContextProps } from "@/services/Context/DetailPageContext"
import Image from "next/image"
import React, { useContext, useEffect, useRef, useState } from "react"
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6"
import { IoMdCloseCircleOutline } from "react-icons/io"
import Slider from "react-slick"

export const MoreDetailsLeftSide = () => {
  const [overview, setOverview] = useState<boolean>(false)
  const [features, setFeatures] = useState<boolean>(false)
  const { moreVideos, setMoreVideos } = useContext(DetailPageContext) as DetailPageContextProps

  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const placeDetails = useAppSelector(state => state.place?.placeDetails)

  const sliderRef = useRef<Slider>(null)

  const handleSelectedImage = (key: number) => {
    setSelectedImage(key)
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(key)
    }
  }

  const handleDeselctedImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(null)
    }
  }
  const handleOverview = () => {
    setOverview(!overview)
  }
  const handleFeatures = () => {
    setFeatures(!features)
  }
  const handleVideo = () => {
    setMoreVideos(!moreVideos)
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
            <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
              {placeDetails &&
                placeDetails.displayImages &&
                Object.keys(placeDetails.displayImages).map((key: any, index) => (
                  <div
                    key={key}
                    className="cursor-pointer rounded-lg overflow-hidden w-full aspect-[1/1] sm:aspect-[4/3]"
                    onClick={() => handleSelectedImage(index)}
                  >
                    <Image
                      src={placeDetails?.displayImages?.[index] ?? ""}
                      alt={placeDetails?.placeName || "littlemoments"}
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
      {selectedImage !== null && (
        <div className="fixed z-30 inset-0 bg-black bg-opacity-95 flex items-center justify-center">
          <div className=" h-screen w-screen">
            <div className="padding">
              <div
                className="mt-20 text-2xl text-secondary flex justify-end items-end cursor-pointer"
                onClick={handleDeselctedImage}
              >
                <IoMdCloseCircleOutline />
              </div>
              <div className="my-8">
                <Slider ref={sliderRef} initialSlide={selectedImage}>
                  {placeDetails &&
                    placeDetails.displayImages &&
                    Object.keys(placeDetails.displayImages).map((key: any, index) => (
                      <div key={index} className="h-[500px] w-full relative">
                        <div className="w-full">
                          <Image
                            src={placeDetails?.displayImages?.[index] ?? ""}
                            alt={placeDetails?.placeName || "littlemoments"}
                            layout="fill"
                            objectFit="contain"
                            objectPosition="center"
                            className="w-full h-full rounded-md"
                          />
                        </div>
                      </div>
                    ))}
                </Slider>
              </div>
              <div className="flex justify-center w-full">
                <div className="flex gap-8 overflow-auto">
                  {placeDetails &&
                    placeDetails.displayImages &&
                    Object.keys(placeDetails.displayImages).map((key: any, index) => (
                      <div
                        key={index}
                        className="rounded-lg cursor-pointer"
                        onClick={() => handleSelectedImage(index)}
                      >
                        <div className="h-28 w-28 sm:h-48 sm:w-48 rounded-lg overflow-hidden">
                          <Image
                            src={placeDetails?.displayImages?.[index] ?? ""}
                            alt={placeDetails?.placeName || "littlemoments"}
                            width={500}
                            height={500}
                            objectFit="cover"
                            className="w-full h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover "
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
