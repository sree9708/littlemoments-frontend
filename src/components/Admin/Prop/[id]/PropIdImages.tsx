import { useAppSelector } from "@/hooks/useStore"
import Image from "next/image"
import React from "react"

const PropIdImages = () => {
  const propDetails = useAppSelector(state => state.place?.placeDetails)

  return (
    <div className="w-full my-4 h-fit border-2 border-primary p-2 rounded-lg">
      <div className="my-2">
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
          {propDetails &&
            propDetails.displayImages &&
            Object.keys(propDetails.displayImages).map((key: any, index) => (
              <div
                key={key}
                className="cursor-pointer rounded-lg overflow-hidden w-full aspect-[1/1] sm:aspect-[4/3]"
              >
                <Image
                  src={propDetails?.displayImages?.[index] ?? ""}
                  alt={propDetails?.placeName || "littlemoments"}
                  width={500}
                  height={500}
                  className="w-full h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover "
                />
              </div>
            ))}
        </div>
      </div>
      {/* {selectedImage !== null && (
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
                  {propDetails &&
                    propDetails.displayImages &&
                    Object.keys(propDetails.displayImages).map((key: any, index) => (
                      <div key={index} className="h-[500px] w-full relative">
                        <div className="w-full">
                          <Image
                            src={propDetails?.displayImages?.[index] ?? ""}
                            alt={propDetails?.placeName || "littlemoments"}
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
                  {propDetails &&
                    propDetails.displayImages &&
                    Object.keys(propDetails.displayImages).map((key: any, index) => (
                      <div
                        key={index}
                        className="rounded-lg cursor-pointer"
                        onClick={() => handleSelectedImage(index)}
                      >
                        <div className="h-28 w-28 sm:h-48 sm:w-48 rounded-lg overflow-hidden">
                          <Image
                            src={propDetails?.displayImages?.[index] ?? ""}
                            alt={propDetails?.placeName || "littlemoments"}
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
      )} */}
    </div>
  )
}

export default PropIdImages
