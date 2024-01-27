"use client"

import UploadImagesForm from "@/components/Forms/ProfileProps/UploadImagesForm"
import BusinessDetails from "@/components/ProfilePage/Props/MoreDetails/BusinessDetails"
import Information from "@/components/ProfilePage/Props/MoreDetails/Information"
import SocialLinks from "@/components/ProfilePage/Props/MoreDetails/SocialLinks"
import React, { useState } from "react"
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6"

export const MoreDetails = () => {
  const [businessDetails, setBusinessDetails] = useState<boolean>(false)
  const [information, setInformation] = useState<boolean>(false)
  const [uploadImage, setUploadImage] = useState<boolean>(false)
  const [socialLinks, setSocialLinks] = useState<boolean>(false)

  const handleBusinessDetails = () => {
    setBusinessDetails(!businessDetails)
  }
  const handleInformation = () => {
    setInformation(!information)
  }
  const handleUploadImage = () => {
    setUploadImage(!uploadImage)
  }
  const handleSocialLinks = () => {
    setSocialLinks(!socialLinks)
  }

  return (
    <div className="my-24">
      <div className="">
        <div className="flex w-full justify-between items-center" onClick={handleBusinessDetails}>
          <div className="text-5xl font-title">BUSINESS DETAILS</div>
          <div className="text-xl cursor-pointer">
            {businessDetails ? <FaCircleMinus /> : <FaCirclePlus />}
          </div>
        </div>
        <div
          className={`transition-opacity duration-300 ease-in-out  overflow-hidden ${
            businessDetails ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
          }`}
        >
          <div className="my-2">
            <BusinessDetails />
          </div>
        </div>
        <div className="w-full border-t border-gray-500 my-4"></div>
      </div>
      <div>
        <div className="flex w-full justify-between items-center" onClick={handleInformation}>
          <div className="text-5xl font-title">INFORMATION</div>
          <div className="text-xl cursor-pointer">{information ? <FaCircleMinus /> : <FaCirclePlus />}</div>
        </div>
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            information ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
          } ${information ? "" : "overflow-hidden"}`}
        >
          <div className="my-2">
            <Information />
          </div>
        </div>
        <div className="w-full border-t border-gray-500 my-4"></div>
      </div>
      <div>
        <div className="flex w-full justify-between items-center" onClick={handleUploadImage}>
          <div className="text-5xl font-title">UPLOAD IMAGES</div>
          <div className="text-xl cursor-pointer">{uploadImage ? <FaCircleMinus /> : <FaCirclePlus />}</div>
        </div>
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            uploadImage ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
          } ${uploadImage ? "" : "overflow-hidden"}`}
        >
          <div className="my-2">
            <UploadImagesForm />
          </div>
        </div>
        <div className="w-full border-t border-gray-500 my-4"></div>
      </div>
      <div>
        <div className="flex w-full justify-between items-center">
          <div className="text-5xl font-title">SOCIAL LINKS</div>
          <div className="text-xl cursor-pointer" onClick={handleSocialLinks}>
            {socialLinks ? <FaCircleMinus /> : <FaCirclePlus />}
          </div>
        </div>
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            socialLinks ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
          }`}
        >
          <div className="my-2">
            <SocialLinks />
          </div>
        </div>
        <div className="w-full border-t border-gray-500 my-4"></div>
      </div>
    </div>
  )
}
