"use client"

import Image from "next/image"
import React from "react"
import { FaStar } from "react-icons/fa"
import { HiMapPin } from "react-icons/hi2"
import { useRouter } from "next/navigation"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { useAppSelector } from "@/hooks/useStore"

interface CardProps {
  // popular: boolean
  _id: string | undefined
  heading: string | undefined
  // rating: string
  // date: string
  placeName: string | undefined
  // price: string
  city: string | undefined
  // phone: string
  image: string | StaticImport | undefined
}

const Card: React.FC<CardProps> = ({
  // popular,
  _id,
  heading,
  // rating,
  // date,
  placeName,
  // price,
  city,
  // phone,
  image,
}) => {
  const router = useRouter()

  const handleRouting = () => {
    router.push(`/places/${_id}`)
  }

  return (
    <div
      className="rounded-lg hover:scale-95 transition-transform duration-300 bg-secondary border-2 border-primary drop-shadow-[7px_7px_0_rgba(0,0,0,1)] md:drop-shadow-[10px_10px_0_rgba(0,0,0,1)]"
      onClick={handleRouting}
    >
      <div className="rounded-t-md relative  aspect-[5/4] w-full overflow-hidden group">
        {image && placeName && (
          <div className="absolute top-0 left-0 w-full h-full z-10 after:absolute after:inset-0 after:from-black after:to-transparent after:bg-gradient-to-t after:opacity-50">
            <Image
              src={image}
              alt={placeName}
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        {/* <div className="absolute bottom-2 left-2 sm:bottom-6 sm:left-6 overflow-hidden whitespace-nowrap overflow-ellipsis drop-shadow-sm text-secondary font-anton font-extrabold text-xl sm:text-2xl w-full">
          {heading}
        </div> */}
        <div className="absolute z-10 bottom-2 left-2 sm:bottom-6 sm:left-6 overflow-hidden whitespace-nowrap overflow-ellipsis drop-shadow-sm text-secondary font-anton font-extrabold text-xl sm:text-2xl w-full">
          {heading}
        </div>
      </div>
      <div className="p-2">
        <div className="mt-2 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">{placeName}</div>
        <div className="my-4 font-medium text-sm">
          <div className="flex items-center gap-1">
            <HiMapPin />
            <div className="overflow-hidden whitespace-nowrap overflow-ellipsis">{city}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
