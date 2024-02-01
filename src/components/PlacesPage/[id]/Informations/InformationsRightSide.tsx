import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { updateWishlistThunk } from "@/services/Redux/reducers/userSlice"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { FaRegHeart } from "react-icons/fa6"
import { IoShareSocialOutline } from "react-icons/io5"
import Swal from "sweetalert2"

export const InformationsRightSide = () => {
  const { push } = useRouter()

  const placeDetails = useAppSelector(state => state.place?.placeDetails)
  const user = useAppSelector(state => state.user?.userInformations)
  const propId = useAppSelector(state => state.prop?.id)
  const [isFavourite, setIsFavourite] = useState<boolean>(
    (user && user?.wishlists?.map((id: string) => id.toString()).includes(placeDetails?.id ?? "")) || false,
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const handleHeart = async () => {
    if (user) {
      if (isFavourite) {
        try {
          setIsLoading(true)
          await dispatch(updateWishlistThunk({ propId: placeDetails?.id ?? "", wishlist: "remove" }))
          setIsFavourite(false)
          setIsLoading(false)
        } catch (error) {
          setIsLoading(false)
          console.log(error)
        }
      } else {
        try {
          setIsLoading(true)
          await dispatch(updateWishlistThunk({ propId: placeDetails?.id ?? "", wishlist: "add" }))
          setIsFavourite(true)
          setIsLoading(false)
        } catch (error) {
          setIsLoading(false)
          console.log(error)
        }
      }
    } else {
      Swal.fire({
        title: "Login Required",
        text: "Please login to add this place to your wishlist.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Login",
        cancelButtonText: "Cancel",
      }).then(result => {
        if (result.isConfirmed) {
          push("/login")
        }
      })
    }
  }

  return (
    <div className=" sm:col-span-2  mt-4 md:m-0 ">
      <div className="flex gap-4 md:justify-end">
        {!propId && (
          <div>
            {isLoading ? (
              <div className="p-3 bg-background rounded-lg cursor-pointer border-2 border-primary drop-shadow-[5px_5px_0_rgba(0,0,0,1)]">
                <svg className="animate-spin h-5 w-5 text-primary" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-0"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l1.414-1.414C2.56 15.123 1.5 13.66 1.5 12H6c0 1.654 1.346 3 3 3v4c-3.042 0-5.824-1.135-7.938-3l1.414-1.414z"
                  />
                </svg>
              </div>
            ) : (
              <div
                className={`p-3 ${
                  isFavourite ? "bg-theme-color-1" : "bg-background"
                } cursor-pointer border-2  border-primary rounded-lg drop-shadow-[5px_5px_0_rgba(0,0,0,1)]`}
                onClick={handleHeart}
              >
                <FaRegHeart />
              </div>
            )}
          </div>
        )}
        <div
          className="p-3 bg-background hover:bg-theme-color-4 cursor-pointer border-2 border-primary rounded-lg drop-shadow-[5px_5px_0_rgba(0,0,0,1)]"
          onClick={async () => {
            if (navigator.share) {
              try {
                await navigator.share({
                  title: "Title of the content",
                  text: "Text of the content",
                  url: window.location.href,
                })
              } catch (error) {
                console.error("Something went wrong sharing the blog", error)
              }
            } else {
              console.log("Web Share API not supported")
            }
          }}
        >
          <IoShareSocialOutline />
        </div>
      </div>
    </div>
  )
}
