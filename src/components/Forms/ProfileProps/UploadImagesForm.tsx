"use client"

import { errorMessage } from "@/hooks/useNotifications"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { addPropDisplayImagesThunk, removePropDisplayImagesThunk } from "@/services/Redux/reducers/propSlice"
import Image from "next/image"
import React, { useState } from "react"
import { IoCloseCircleOutline } from "react-icons/io5"
import Swal from "sweetalert2"

const UploadImagesForm = () => {
  const dispatch = useAppDispatch()
  const propInformation = useAppSelector(state => state.prop?.propInformations)

  const [uploadImage, setUploadImage] = useState<boolean>(false)

  const handleCloseClick = (image: string | undefined) => {
    if (image) {
      if ((propInformation?.displayImages ?? []).length <= 1) {
        Swal.fire("Error", "You must have at least one image.", "error")
        return
      }
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(result => {
        if (result.isConfirmed) {
          const imageUrls = [image]
          dispatch(removePropDisplayImagesThunk({ id: propInformation?.id, imageUrls }))
          Swal.fire("Deleted!", "Your file has been deleted.", "success")
        }
      })
    }
  }

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files) {
      if ((propInformation?.displayImages ?? []).length >= 10) {
        Swal.fire("Error", "You can only upload a maximum of 10 images.", "error")
        return
      }
      try {
        await dispatch(addPropDisplayImagesThunk({ id: propInformation?.id, file: files[0] }))
        setUploadImage(false)
      } catch (err: any) {
        errorMessage(err.message)
      }
    }
  }

  return (
    <>
      <div className="py-8">
        {/* <div className="flex flex-wrap gap-4"> */}
        <div className="grid grid-cols-3 sm:grid-clos-4 md:grid-cols-6 lg:grid-col-8  gap-4">
          {Object.keys(propInformation?.displayImages || {}).map((key: any, index) => (
            <div key={index} className="rounded-lg relative">
              {propInformation?.displayImages ? (
                <div className="aspect-[4/4] rounded-lg ">
                  <Image
                    src={propInformation?.displayImages?.[key] ?? ""}
                    alt={`${propInformation?.placeName}${index}` ?? `littlemoments${index}`}
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="w-full rounded-lg h-full transition-transform duration-300 ease-linear hover:scale-105 object-cover drop-shadow-lg"
                  />
                </div>
              ) : (
                <div className="aspect-[4/4] rounded-lg animate-pulse">
                  <div className="flex items-center justify-center w-full h-full bg-gray-300">
                    <svg
                      className="w-10 h-10 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                </div>
              )}
              <div className="absolute cursor-pointer -top-2 -right-2">
                <div className="border text-xl md:text-2xl border-secondary rounded-full bg-secondary shadow-md">
                  <IoCloseCircleOutline
                    onClick={() => handleCloseClick(propInformation?.displayImages?.[key])}
                  />
                </div>
              </div>
            </div>
          ))}
          {uploadImage && (
            <div className="aspect-[4/4] rounded-lg animate-pulse">
              <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded-lg">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            </div>
          )}
          <div className="aspect-[4/4] rounded-lg border-2 border-dashed border-primary group">
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                </div>
                <div className="w-full text-center flex justify-center">Add new images</div>
                <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadImagesForm
