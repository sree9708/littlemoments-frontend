import { useAppSelector } from "@/hooks/useStore"
import React, { useState } from "react"

const RateCardFeatures = () => {
  const placeDetails = useAppSelector(state => state.place?.placeDetails)

  return (
      <div className="w-full h-fit border-2 border-primary p-2 rounded-lg">
        <div className=" mt-2 w-full">
          <div className="w-full">
            <div className="my-2  border bg-theme-color-1 font-bold text-secondary p-2 rounded-md drop-shadow-sm grid grid-cols-2">
              <div className="me-2 flex justify-center items-center">
                <div>Service</div>
              </div>
              <div className="w-full flex justify-center px-2">Price</div>
            </div>
            {placeDetails?.rateCard?.map((row, index) => (
              <div key={index} className="my-2 grid grid-cols-2 gap-2">
                <div className=" border border-primary  p-2 rounded-md drop-shadow-sm ">
                  <div>{row.title}</div>
                </div>
                <div className=" border border-primary  p-2 rounded-md drop-shadow-sm ">
                  <div>₹ {row.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default RateCardFeatures
