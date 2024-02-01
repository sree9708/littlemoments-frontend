"use client"

import Image from "next/image"
import React from "react"
import { HiMapPin } from "react-icons/hi2"
import { useRouter } from "next/navigation"

const CardLazy: React.FC = () => {
  return (
    <div className="animate-pulse rounded-lg hover:scale-95 transition-transform duration-300 bg-secondary border-2 border-primary drop-shadow-[7px_7px_0_rgba(0,0,0,1)] md:drop-shadow-[10px_10px_0_rgba(0,0,0,1)]">
      <div className="rounded-t-md relative  aspect-[5/4] w-full overflow-hidden group flex justify-center">
        <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded sm:w-96">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      </div>
      <div className="p-2">
        <div className="mt-2 font-bold overflow-hidden whitespace-nowrap overflow-ellipsis">
          <div className="h-2.5 bg-gray-200 rounded-full w-full mb-4"></div>
        </div>
        <div className="my-4 font-medium text-sm">
          <div className="flex items-center  gap-1">
            <HiMapPin />
            <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardLazy
