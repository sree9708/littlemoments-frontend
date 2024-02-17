import { useAppSelector } from "@/hooks/useStore"
import React from "react"

const PropIdAge = () => {
  const propDetails = useAppSelector(state => state.place?.placeDetails)

  return (
    <div className="w-full border-2 border-primary p-2 my-4 rounded-lg">
      <div className="flex flex-col lg:flex-row gap-2 w-full my-2">
        <div className="flex items-center gap-2 border border-primary p-2 rounded-md drop-shadow-sm w-full">
          <div className="font-bold whitespace-nowrap">Starting Age: </div>
          <div>{propDetails?.age && propDetails?.age.length <= 2 ? propDetails?.age[0] : null}</div>
        </div>
        <div className="flex items-center gap-2 border border-primary p-2 rounded-md drop-shadow-sm w-full">
          <div className="font-bold whitespace-nowrap">Ending Age: </div>
          <div>{propDetails?.age && propDetails?.age.length <= 2 ? propDetails?.age[1] : null}</div>
        </div>
      </div>
    </div>
  )
}

export default PropIdAge
