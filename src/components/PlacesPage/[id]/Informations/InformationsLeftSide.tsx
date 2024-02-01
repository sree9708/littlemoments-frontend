import { useAppSelector } from "@/hooks/useStore"
import React from "react"
import { FaStar } from "react-icons/fa6"
import { HiMapPin } from "react-icons/hi2"
import { IoMdCall } from "react-icons/io"

export const InformationsLeftSide = () => {
  const placeDetails = useAppSelector(state => state.place?.placeDetails)
  const reviews = useAppSelector(state => state.review?.reviews)

  return (
    <div className="sm:col-span-10">
      <div className="flex gap-3 items-center">
        <div className="text-theme-4">
          <FaStar />
        </div>
        <div>4.9 stars</div>
        <div className="text-slate-400">( {reviews.length} Reviews )</div>
      </div>
      <div className="font-title text-title-sm my-4 truncate">
        {placeDetails ? (
          placeDetails?.placeName ?? "Place name not available"
        ) : (
          <div className="h-8 bg-gray-200 rounded-full w-full animate-pulse"></div>
        )}
      </div>
      <div className="text-lg">
        {placeDetails ? (
          placeDetails?.placeDescription ?? "Description not available"
        ) : (
          <div className="h-2.5 bg-gray-200 rounded-full w-full animate-pulse"></div>
        )}
      </div>
      <div className="flex flex-wrap w-full mt-4 gap-4">
        <div className="flex items-center gap-1">
          <div className="w-4 h-4">
            <HiMapPin />
          </div>
          {placeDetails ? (
            placeDetails?.city ?? "City not available"
          ) : (
            <div className="h-2.5 bg-gray-200 rounded-full aspect-[10/1] animate-pulse"></div>
          )}
        </div>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4">
            <IoMdCall />
          </div>
          <a
            href={`tel:+91${placeDetails && (placeDetails?.displayContactNo ?? "+91 000000000")}`}
            className="hover:underline whitespace-nowrap truncate w-full"
          >
            {placeDetails ? (
              `+91 ${placeDetails?.displayContactNo}` ?? "Contact number not available"
            ) : (
              <div className="h-2.5 bg-gray-200 rounded-full aspect-[10/1] animate-pulse"></div>
            )}
          </a>
        </div>
      </div>
    </div>
  )
}
