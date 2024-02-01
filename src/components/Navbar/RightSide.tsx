"use client"

import useClickOutside from "@/hooks/useClickOutside"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import imageSrc from "../../../public/avatar.jpg"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { logoutUser } from "@/services/Redux/reducers/userSlice"
import { logoutProp } from "@/services/Redux/reducers/propSlice"
import { logoutReview } from "@/services/Redux/reducers/reviewSlice"
import Swal from "sweetalert2"

const RightSide: React.FC = () => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(state => state.user?.id)
  const propId = useAppSelector(state => state.prop?.id)
  const propInformations = useAppSelector(state => state.prop?.propInformations)

  const [dropdown, setDropdown] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  const { push } = useRouter()
  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  const clickOutsideRef = useClickOutside(() => {
    setDropdown(false)
  })

  const handleAddPlace = () => {
    if (userId) {
      push("/profile")
    } else if (propId) {
      if (propInformations?.isProfileAdded) {
        push("/profile/props")
      } else {
        push("/add-place")
      }
    }
  }

  const handleProfile = () => {
    if (userId) {
      push("/profile")
    } else if (propId) {
      if (propInformations?.isProfileAdded) {
        push("/profile/props")
      } else {
        Swal.fire({
          title: "Please add your place details",
          showCancelButton: true,
          confirmButtonText: "Add Place",
          cancelButtonText: "Cancel",
          icon: "warning",
        }).then(result => {
          if (result.isConfirmed) {
            push("/add-place")
          }
        })
      }
    }
  }

  const handleLogout = () => {
    dispatch(logoutUser())
    dispatch(logoutProp())
    dispatch(logoutReview())
    push("/")
  }

  return (
    <>
      {isClient && (
        <div className="flex gap-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16 w-fit justify-end items-center text-center">
          <div className="hidden sm:flex cursor-pointer whitespace-nowrap">
            <Link href={"/"}>Home</Link>
          </div>
          {propId && (
            <div className="hidden sm:flex cursor-pointer whitespace-nowrap" onClick={handleAddPlace}>
              Add a Place
            </div>
          )}
          <div className="hidden sm:flex cursor-pointer whitespace-nowrap">Download App</div>
          {!userId && !propId ? (
            <Link
              href="/login"
              className="flex items-center gap-2 py-4 px-2 sm:px-4 md:px-8 lg:px-12 bg-primary text-background cursor-pointer hover:opacity-80"
            >
              <div>Login</div>
              <div>
                <FaArrowRightLong />
              </div>
            </Link>
          ) : (
            <div className="relative inline-block text-left">
              <div
                className=" pe-2 sm:pe-4 md:pe-8 lg:pe-12 cursor-pointer hover:opacity-80"
                onClick={handleDropdown}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-primary">
                  <Image
                    src={imageSrc}
                    alt="avatar"
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="w-full h-full rounded-full"
                  />
                </div>
              </div>
              {dropdown && (
                <div
                  ref={clickOutsideRef}
                  className="absolute right-10 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <div
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-theme-color-1 transition duration-300 ease-in-out hover:text-secondary cursor-pointer"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0"
                      onClick={handleProfile}
                    >
                      Profile
                    </div>
                    {userId && (
                      <div
                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-theme-color-1 transition duration-300 ease-in-out hover:text-secondary cursor-pointer"
                        role="menuitem"
                        tabIndex={-1}
                        id="menu-item-1"
                      >
                        Wishlist
                      </div>
                    )}
                    <div
                      className="text-gray-700 block px-4 py-2 text-sm hover:bg-theme-color-1 transition duration-300 ease-in-out hover:text-secondary cursor-pointer"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default RightSide
