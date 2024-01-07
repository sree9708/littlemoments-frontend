"use client"

import Image from "next/image"
import React from "react"
import { FaStar } from "react-icons/fa"
import { HiMapPin } from "react-icons/hi2"
import { IoMdCall } from "react-icons/io"
import { useRouter } from "next/navigation"

interface CardProps {
  popular: boolean
  heading: string
  rating: string
  date: string
  title: string
  price: string
  location: string
  phone: string
  image: string
}

const Card: React.FC<CardProps> = ({
  popular,
  heading,
  rating,
  date,
  title,
  price,
  location,
  phone,
  image,
}) => {
  const router = useRouter()

  const handleRouting = () => {
    router.push(`/places/${title}`)
  }

  return (
    <div
      className="rounded-lg min-w-[150px] max-w-[280px] hover:scale-105 transition-transform duration-300  bg-secondary border-2 border-primary drop-shadow-[10px_10px_0_rgba(0,0,0,1)]"
      onClick={handleRouting}
    >
      <div className="rounded-md w-full h-[250px] group overflow-hidden relative">
        <Image
          src={image}
          alt="image2"
          width={500}
          height={500}
          objectFit="cover"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {popular && (
          <div className="absolute top-2 right-2  sm:top-4 sm:right-4 bg-theme-color-4 border-2 border-primary p-1 px-2 rounded-full text-xs font-bold">
            Popular
          </div>
        )}
        <div className="absolute bottom-2 left-2 sm:bottom-6 sm:left-6 text-secondary font-anton font-extrabold text-xl sm:text-2xl">
          {heading}
        </div>
      </div>
      <div className="p-2">
        {/* <div className='flex justify-between'>
                    <div className='flex gap-2 items-center'>
                        <div className='text-yellow'>
                            <FaStar />
                        </div>
                        <div>
                            {rating}
                        </div>
                    </div>
                    <div>{date}</div>
                </div> */}
        <div className=" font-bold">{title}</div>
        <div className="my-4 font-semibold">
          <div className="flex flex-wrap items-center gap-1">
            <HiMapPin />
            {location}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
