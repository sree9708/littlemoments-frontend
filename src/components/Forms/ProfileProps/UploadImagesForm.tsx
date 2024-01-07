"use client"

import Image from "next/image"
import React from "react"

const images: {
  [key: number]: string
} = {
  0: "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  1: "https://images.pexels.com/photos/2845890/pexels-photo-2845890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  2: "https://images.pexels.com/photos/3603453/pexels-photo-3603453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  3: "https://images.pexels.com/photos/18781943/pexels-photo-18781943/free-photo-of-footbridge-over-shantang-river-in-suzhou-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}

const UploadImagesForm = () => {
  //   const handleButtonClick = () => {
  //     const fileInput = document.getElementById("upload-images");
  //     if (fileInput) {
  //       fileInput.click();
  //     }
  //   };

  return (
    <>
      <div className="py-8">
        <div className="flex flex-wrap gap-4">
          {Object.keys(images).map((key: any, index) => (
            <div key={index} className="rounded-lg">
              <div className="h-28 w-28 sm:h-48 sm:w-48 rounded-lg ">
                <Image
                  src={images[key]}
                  alt={`image${index + 1}`}
                  width={500}
                  height={500}
                  objectFit="cover"
                  className="w-full rounded-lg h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover drop-shadow-lg"
                />
              </div>
            </div>
          ))}
          <div className="h-28 w-28 sm:h-48 sm:w-48 rounded-lg border-2 border-dashed border-primary group">
            <div className="flex items-center justify-center w-full h-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-full cursor-pointer"
              >
                <div className="flex flex-col items-center justify-center group-hover:animate-bounce">
                  <svg
                    className="w-8 h-8 mb-4 text-primary"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                </div>
                <div>Add new images</div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadImagesForm
