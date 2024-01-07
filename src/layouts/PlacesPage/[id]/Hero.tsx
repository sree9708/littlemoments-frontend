"use client"

import { DetailPageContext, DetailPageContextProps } from "@/services/Context/DetailPageContext"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React, { useContext, useEffect, useRef, useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { IoMdCloseCircleOutline } from "react-icons/io"

const images: {
  [key: number]: string
} = {
  0: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  1: "https://images.pexels.com/photos/2845890/pexels-photo-2845890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  2: "https://images.pexels.com/photos/3603453/pexels-photo-3603453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  3: "https://images.pexels.com/photos/18781943/pexels-photo-18781943/free-photo-of-footbridge-over-shantang-river-in-suzhou-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}

const Hero: React.FC = () => {
  const { selectedImage, setSelectedImage, setMoreVideos } = useContext(
    DetailPageContext,
  ) as DetailPageContextProps

  const sliderRef = useRef<Slider>(null)

  const router = useRouter()

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

  const handleListingVideo = () => {
    setMoreVideos(true)
    router.push("#listing-videos")
  }

  useEffect(() => {
    router.push("/places/1")
  }, [router])

  return (
    <div className="h-full">
      <div className="h-full mt-12 sm:mt-32 grid grid-cols-12 gap-4">
        <div className="h-full col-span-12 md:col-span-7">
          <div
            className="h-60 sm:h-72 overflow-hidden rounded-lg md:h-full w-full relative"
            onClick={() => handleSelectedImage(0)}
          >
            {/* <div className={`transition-opacity duration-300 ease-in-out ${opacity === 1 ? 'opacity-100' : 'opacity-0'}`}> */}
            <div>
              <Image
                src={images[0]}
                alt="China"
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
        </div>
        <div className="col-span-12 md:col-span-5">
          <div className="h-full grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-4 lg:gap-2">
            {Object.keys(images).map((key: any, index) => {
              if (index < 3) {
                return (
                  <div
                    key={key}
                    className="cursor-pointer rounded-lg overflow-hidden w-full h-32 sm:h-60"
                    onClick={() => handleSelectedImage(index + 1)}
                  >
                    <Image
                      src={images[index + 1]}
                      alt={`image${index}`}
                      width={500}
                      height={500}
                      className="w-full h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover "
                    />
                  </div>
                )
              } else if (index === 3) {
                return (
                  <div
                    key={key}
                    className=" w-full h-32 sm:h-60  cursor-pointer relative"
                    onClick={handleListingVideo}
                  >
                    <Image
                      src={images[0]}
                      alt={`image${0}`}
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
                )
              }
            })}
          </div>
        </div>
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
                  {Object.keys(images).map((key: any, index) => (
                    <div key={index} className="h-[500px] w-full relative">
                      <div className="w-full">
                        <Image
                          src={images[key]}
                          alt={`image${index + 1}`}
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
              <div className="flex gap-8 overflow-auto ">
                {Object.keys(images).map((key: any, index) => (
                  <div
                    key={index}
                    className="rounded-lg cursor-pointer"
                    onClick={() => handleSelectedImage(index)}
                  >
                    <div className="h-28 w-28 sm:h-48 sm:w-48 rounded-lg overflow-hidden">
                      <Image
                        src={images[key]}
                        alt={`image${index + 1}`}
                        width={500}
                        height={500}
                        objectFit="cover"
                        className="w-full h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover "
                      />
                    </div>
                  </div>
                ))}
                {Object.keys(images).map((key: any, index) => (
                  <div
                    key={index}
                    className="rounded-lg cursor-pointer"
                    onClick={() => handleSelectedImage(index)}
                  >
                    <div className="h-28 w-28 sm:h-48 sm:w-48 rounded-lg overflow-hidden">
                      <Image
                        src={images[key]}
                        alt={`image${index + 1}`}
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
      )}
    </div>
  )
}

export default Hero
