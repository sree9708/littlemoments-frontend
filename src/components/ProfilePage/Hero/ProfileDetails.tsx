import useMounted from "@/hooks/useMounted"
import { useAppSelector } from "@/hooks/useStore"
import React from "react"
import { HiMapPin } from "react-icons/hi2"
import { IoMdCall } from "react-icons/io"

const ProfileDetails = () => {
  const userInformations = useAppSelector(state => state.user?.userInformations)
  const hasMounted = useMounted()

  return (
    <>
      {hasMounted && (
        <div className="w-fit overflow-hidden truncate">
          <div className="font-title text-title-sm my-4">
            {userInformations ? (
              <div className="whitespace-normal truncate">{userInformations?.username ?? "Place Name"}</div>
            ) : (
              <div className="h-10 bg-gray-300 rounded-full w-full animate-pulse"></div>
            )}
          </div>
          <div className="flex flex-wrap mt-4 gap-4">
            <div className="flex items-center gap-1 truncate">
              <div className="w-4 h-4">
                <HiMapPin />
              </div>
              {userInformations ? (
                <div className="truncate">{userInformations?.currentCity ?? "Your city"}</div>
              ) : (
                <div className="aspect-[10/1] h-5 bg-gray-300 animate-pulse rounded-full"></div>
              )}
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4">
                <IoMdCall />
              </div>
              <div className="hover:underline truncate">
                {userInformations ? (
                  `+91 ${userInformations?.phoneNumber}` ?? "0000000000"
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
