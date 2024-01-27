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
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { addUploadImages } from "@/services/Redux/reducers/propSlice"
import { base64ToFile, filetoBase64 } from "@/services/Utilities/base64/base64.services"

interface ExtendedFile extends File {
  previewUrl?: string
}

const UploadImagesForm = () => {
  const { push } = useRouter()
  const { setIsTracker } = useContext(TrackerContext) as TrackerContextProps

  const dispatch = useAppDispatch()
  const displayImages = useAppSelector(state => state.prop?.propDetailsForm?.displayImages)
  const displayImagesFile = displayImages && displayImages.map((image: string) => base64ToFile(image, "file"))

  useEffect(() => {
    setIsTracker(4)
  }, [setIsTracker])

  const [selectedImages, setSelectedImages] = useState<File[]>(displayImagesFile ? displayImagesFile : [])
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

  const onSubmitUploadImages = async (event: React.FormEvent) => {
    event.preventDefault()
    if (selectedImages.length <= 0) {
      setError("Please select any image")
      return
    }
    try {
      const base64Images = await Promise.all(selectedImages.map(image => filetoBase64(image)))
      dispatch(addUploadImages({ displayImages: base64Images }))
      push("/add-place/social-links")
    } catch (error: any) {
      console.log("Form : ", error.message)
    }
  }

  const handleBack = () => {
    push("/add-place/information")
  }

  const createObjectURLSafely = (image: ExtendedFile) => {
    try {
      // Check if the URL has already been created
      if (image.previewUrl) {
        return image.previewUrl
      }

      const url = URL.createObjectURL(image)

      // Store the URL in the file object to avoid creating it again
      image.previewUrl = url

      return url
    } catch (error) {
      console.error("Error creating object URL:", error)
      return ""
    }
  }

  return (
    <>
      <div className="py-8">
        <div className="grid grid-cols-3 gap-4">
          {selectedImages.map((image, index) => (
            <div className="relative" key={index}>
              <div className="drop-shadow-sm rounded-md">
                {image && ( // Add this conditional check
                  <Image
                    src={createObjectURLSafely(image)}
                    alt={`Preview ${index + 1}`}
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="rounded-md drop-shadow-xl"
                  />
                )}
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
        <form onSubmit={onSubmitUploadImages}>
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
