"use client"

import FavouritesCards from "@/components/ProfilePage/MoreDetails/FavouritesCards"
import Reviews from "@/components/ProfilePage/MoreDetails/Reviews"
import Settings from "@/components/ProfilePage/MoreDetails/Settings"
import React, { useState } from "react"
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6"

export const MoreDetails = () => {
  const [reviews, setReviews] = useState<boolean>(false)
  const [favourites, setFavourites] = useState<boolean>(false)
  const [settings, setSettings] = useState<boolean>(false)

  const handlereviews = () => {
    setReviews(!reviews)
  }
  const handleFavourites = () => {
    setFavourites(!favourites)
  }
  const handleSettings = () => {
    setSettings(!settings)
  }

  return (
    <div className="my-24">
      <div className="">
        <div className="flex w-full justify-between items-center" onClick={handlereviews}>
          <div className="text-5xl font-title">REVIEWS</div>
          <div className="text-xl cursor-pointer">{reviews ? <FaCircleMinus /> : <FaCirclePlus />}</div>
        </div>
        <div
          className={`transition-opacity duration-300 ease-in-out  overflow-hidden ${
            reviews ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
          }`}
        >
          <div className="my-2">
            <Reviews />
          </div>
        </div>
        <div className="w-full border-t border-gray-500 my-4"></div>
      </div>
      <div>
        <div className="flex w-full justify-between items-center" onClick={handleFavourites}>
          <div className="text-5xl font-title">FAVOURAITES</div>
          <div className="text-xl cursor-pointer">{favourites ? <FaCircleMinus /> : <FaCirclePlus />}</div>
        </div>
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            favourites ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
          } ${favourites ? "" : "overflow-hidden"}`}
        >
          <div className="my-2">
            <FavouritesCards />
          </div>
        </div>
        <div className="w-full border-t border-gray-500 my-4"></div>
      </div>
      <div>
        <div className="flex w-full justify-between items-center">
          <div className="text-5xl font-title">SETTINGS</div>
          <div className="text-xl cursor-pointer" onClick={handleSettings}>
            {settings ? <FaCircleMinus /> : <FaCirclePlus />}
          </div>
        </div>
        <div
          className={`transition-opacity duration-300 ease-in-out ${
            settings ? "opacity-100 max-h-full" : "opacity-0 max-h-0"
          }`}
        >
          <div className="my-2">
            <Settings />
          </div>
        </div>
        <div className="w-full border-t border-gray-500 my-4"></div>
      </div>
    </div>
  )
}
