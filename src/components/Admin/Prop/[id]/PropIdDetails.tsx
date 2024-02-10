import { useAppSelector } from "@/hooks/useStore"
import React from "react"
import { FaDownload, FaEye } from "react-icons/fa6"
import { HiMapPin } from "react-icons/hi2"
import { IoMdCall } from "react-icons/io"

const PropIdDetails = () => {
  const propDetails = useAppSelector(state => state.place.placeDetails)

  return (
    <div className="my-4 w-ful grid grid-cols-1 md:grid-cols-12 bg-secondary rounded-lg p-4 lg:p-8 drop-shadow-md">
      <div className="md:col-span-9">
        <div className="text-xl my-4">
          {propDetails ? (
            <>
              <span className="font-semibold text-theme-1">Email: </span>{" "}
              {propDetails?.email ?? "Place name not available"}
            </>
          ) : (
            <div className="h-8 bg-gray-200 rounded-full w-full animate-pulse"></div>
          )}
        </div>
        <div className="text-lg">
          {propDetails ? (
            <>
              <span className="font-semibold text-theme-1">Description: </span>
              {propDetails?.placeDescription ?? "Description not available"}
            </>
          ) : (
            <div className="h-2.5 bg-gray-200 rounded-full w-full animate-pulse"></div>
          )}
        </div>
        <div className="flex flex-wrap gap-4 my-2">
          <div className="text-lg">
            {propDetails ? (
              <>
                <span className="font-semibold text-theme-1">POC Name: </span>
                {propDetails?.pocName ?? "Poc Name not available"}
              </>
            ) : (
              <div className="h-2.5 bg-gray-200 rounded-full w-full animate-pulse"></div>
            )}
          </div>
          <div className="text-lg">
            {propDetails ? (
              <>
                <span className="font-semibold text-theme-1">POC Contact No: </span>
                {propDetails?.pocContactNo ?? "Poc cotact no not available"}
              </>
            ) : (
              <div className="h-2.5 bg-gray-200 rounded-full w-full animate-pulse"></div>
            )}
          </div>
        </div>
        <div className="text-lg">
          {propDetails ? (
            <>
              <span className="font-semibold text-theme-1">POC Designation: </span>
              {propDetails?.pocDesignation ?? "Poc Designation not available"}
            </>
          ) : (
            <div className="h-2.5 bg-gray-200 rounded-full w-full animate-pulse"></div>
          )}
        </div>
        <div className="flex flex-wrap w-full mt-4 gap-4">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4">
              <HiMapPin />
            </div>
            {propDetails ? (
              propDetails?.city ?? "City not available"
            ) : (
              <div className="h-2.5 bg-gray-200 rounded-full aspect-[10/1] animate-pulse"></div>
            )}
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4">
              <IoMdCall />
            </div>
            <div className="hover:underline whitespace-nowrap truncate w-full">
              {propDetails ? (
                `+91 ${propDetails?.displayContactNo}` ?? "Contact number not available"
              ) : (
                <div className="h-2.5 bg-gray-200 rounded-full aspect-[10/1] animate-pulse"></div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 flex md:flex-col gap-2 sm:items-end">
        <div className="p-2 px-3 w-fit rounded-md bg-theme-1 text-secondary flex items-center gap-4">
          <div>Pan Card File</div>
          <div
            className="cursor-pointer"
            onClick={() => window.open(propDetails?.pan, "_blank", "noopener noreferrer")}
          >
            <FaEye />
          </div>
        </div>
        <div className="p-2 px-3 w-fit rounded-md bg-theme-1 text-secondary flex items-center gap-4">
          <div>GSTIN File</div>
          <div
            className="cursor-pointer"
            onClick={() => window.open(propDetails?.gstin, "_blank", "noopener noreferrer")}
          >
            <FaEye />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropIdDetails
