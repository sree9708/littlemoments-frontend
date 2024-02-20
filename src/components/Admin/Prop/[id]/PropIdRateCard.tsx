import { useAppSelector } from "@/hooks/useStore"
import React from "react"

const PropIdRateCard = () => {
  const propDetails = useAppSelector(state => state.place?.placeDetails)

  return (
    <div className="w-full my-4 h-fit border-2 border-primary p-2 rounded-lg">
      <div className="w-full">
        <div className="my-2  border bg-theme-1 font-bold text-secondary p-2 rounded-md drop-shadow-sm grid grid-cols-2">
          <div className="me-2 flex justify-center items-center">
            <div>Service</div>
          </div>
          <div className="w-full flex justify-center px-2">Price</div>
        </div>
        {propDetails?.rateCard?.map((row, index) => (
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
  )
}

export default PropIdRateCard
