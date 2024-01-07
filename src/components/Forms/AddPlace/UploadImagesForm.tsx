"use client"

import React from "react"
import RegistrationButton from "../../Buttons/RegistrationButton"
import { useContext, useEffect, useState } from "react"
import { TrackerContext, TrackerContextProps } from "@/services/Context/TrackerContext"
import { useRouter } from "next/navigation"
import { FaArrowLeftLong } from "react-icons/fa6"
import { TbUpload } from "react-icons/tb"
import Image from "next/image"
import { IoCloseCircleOutline } from "react-icons/io5"

const UploadImagesForm = () => {
  const { push } = useRouter()
  const { setIsTracker } = useContext(TrackerContext) as TrackerContextProps

  useEffect(() => {
    setIsTracker(4)
  }, [setIsTracker])

  const [selectedImages, setSelectedImages] = useState<File[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      const newFiles = Array.from(files).slice(0, 10)

      if (selectedImages.length + newFiles.length > 10) {
        setError("You can only upload a maximum of 10 images.")
      } else {
        setError(null)
        setSelectedImages(prevImages => [...prevImages, ...newFiles])
      }
    }
  }

  const handleCloseClick = (index: number) => {
    setSelectedImages(prevImages => {
      const updatedImages = [...prevImages]
      updatedImages.splice(index, 1)
      return updatedImages
    })
  }

  const handleButtonClick = () => {
    // Trigger the file input when the button is clicked
    const fileInput = document.getElementById("upload-images")
    if (fileInput) {
      fileInput.click()
    }
  }

  const onSubmitUploadImages = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("musaffar")
    push("/add-place/social-links");
  };

  const handleBack = () => {
    push("/add-place/information")
  }

  return (
    <>
      <div className="py-8">
        <div className="grid grid-cols-3 gap-4">
          {selectedImages.map((image, index) => (
            <div className="relative" key={index}>
              <div className="drop-shadow-sm rounded-md">
                <Image
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index + 1}`}
                  width={500}
                  height={500}
                  objectFit="cover"
                  className="rounded-md drop-shadow-xl"
                />
              </div>
              <div className="absolute cursor-pointer -top-2 -right-2">
                <div className="border border-secondary rounded-full bg-secondary shadow-md">
                  <IoCloseCircleOutline onClick={() => handleCloseClick(index)} />
                </div>
              </div>
            </div>
          ))}
        </div>
        {error && (
          <div className="flex justify-center text-center text-red-500 mt-4">
            <p>{error}</p>
          </div>
        )}
        <label htmlFor="upload-images">
          <button
            className="w-full flex justify-center items-center gap-2 bg-background text-primary mt-8 p-4 rounded-md border-2 border-primary text-2xl font-bold"
            onClick={handleButtonClick}
          >
            <div className="animate-bounce">
              <TbUpload />
            </div>
            Upload Images
          </button>
          <input
            id="upload-images"
            type="file"
            className="hidden"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </label>
          <form onSubmit={onSubmitUploadImages} >
        <div className="flex gap-4">
          <button
            type="button"
            className="w-fit flex items-center gap-2 bg-background text-primary mt-8 p-4 rounded-md border-2 border-primary text-2xl font-bold"
            onClick={handleBack}
          >
            <FaArrowLeftLong />
            Back
          </button>
          <RegistrationButton text="Continue" />
        </div>
          </form>
      </div>
    </>
  )
}

export default UploadImagesForm
