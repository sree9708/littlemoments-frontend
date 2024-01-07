import React from "react"
import { FaStar } from "react-icons/fa6"
import { HiMapPin } from "react-icons/hi2"
import { IoMdCall } from "react-icons/io"

export const InformationsLeftSide = () => {
  return (
    <div className="sm:col-span-10">
      <div className="flex gap-3 items-center">
        <div className="text-theme-color-4">
          <FaStar />
        </div>
        <div>4.9 stars</div>
        <div className="text-slate-400">( 231 Review )</div>
      </div>
      <div className="font-title text-title-sm my-4">TSUKISHIMA MONJA STREET</div>
      <div className="text-lg">
        Users can easily find the perfect experiences to suit their interests. Users can easily find the
        perfect experience to suit their interests.
      </div>
      <div className="flex mt-4 gap-4">
        <div className="flex items-center gap-1">
          <HiMapPin />
          Texes, United States
        </div>
        <div className="flex items-center gap-1">
          <IoMdCall />
          <a href="tel:+919562886328" className="hover:underline">
            +91 9562 886 328
          </a>
        </div>
      </div>
    </div>
  )
}
