"use client"

import { useAppSelector } from "@/hooks/useStore"
import React, { useEffect, useState } from "react"
import { IoIosMail, IoMdCall } from "react-icons/io"

const ProfileDetails = () => {
  const propInformation = useAppSelector(state => state.prop?.propInformations)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient && (
        <div className="w-fit overflow-hidden truncate">
          <div className="font-title text-title-sm my-4 w-full ">
            {propInformation ? (
              <div className="whitespace-normal truncate">{propInformation?.placeName ?? "Place Name"}</div>
            ) : (
              <div className="h-10 bg-gray-300 rounded-full w-full animate-pulse"></div>
            )}
          </div>
          <div className="flex flex-wrap mt-4 gap-4">
            <div className="flex items-center gap-1 truncate">
              <div className="w-4 h-4">
                <IoIosMail />
              </div>
              {propInformation ? (
                <div className="truncate">{propInformation?.email ?? "Your email id"}</div>
              ) : (
                <div className="aspect-[10/1] h-5 bg-gray-300 animate-pulse rounded-full"></div>
              )}
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4">
                <IoMdCall />
              </div>
              <div className="hover:underline truncate">
                {propInformation ? (
                  `+91 ${propInformation?.displayContactNo}` ?? "0000000000"
                ) : (
                  <div className="aspect-[10/1] h-5 bg-gray-300 animate-pulse rounded-full"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProfileDetails
