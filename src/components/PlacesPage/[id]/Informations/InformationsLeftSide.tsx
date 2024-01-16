import { useAppSelector } from "@/hooks/useStore"
import React from "react"
import { FaStar } from "react-icons/fa6"
import { HiMapPin } from "react-icons/hi2"
import { IoMdCall } from "react-icons/io"

export const InformationsLeftSide = () => {
  const placeDetails = useAppSelector(state => state.place.placeDetails)

  return (
    <div className="sm:col-span-10">
      <div className="flex gap-3 items-center">
        <div className="text-theme-color-4">
          <FaStar />
        </div>
        <div>4.9 stars</div>
        <div className="text-slate-400">( 231 Review )</div>
      </div>
      <div className="font-title text-title-sm my-4">
        {placeDetails && placeDetails?.placeName && placeDetails?.placeName}
      </div>
      <div className="text-lg">
        {placeDetails && placeDetails?.placeDescription && placeDetails?.placeDescription}
      </div>
      <div className="flex mt-4 gap-4">
        <div className="flex items-center gap-1">
          <HiMapPin />
          {placeDetails && placeDetails?.displayContactNo && placeDetails?.displayContactNo}
        </div>
        <div className="flex items-center gap-1">
          <IoMdCall />
          <a
            href={`tel:+91${placeDetails && placeDetails?.displayContactNo && placeDetails?.displayContactNo}`}
            className="hover:underline"
          >
            +91 {placeDetails && placeDetails?.displayContactNo && placeDetails?.displayContactNo}
          </a>
        </div>
      </div>
    </div>
  )
}
