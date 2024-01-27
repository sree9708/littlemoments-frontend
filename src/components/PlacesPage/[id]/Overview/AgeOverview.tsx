import { useAppSelector } from "@/hooks/useStore"
import React from "react"

const AgeOverview = () => {
  const placeDetails = useAppSelector(state => state.place?.placeDetails)

  return (
    <div className="block lg:flex gap-2 w-full my-2">
      <div className="my-2 flex gap-2 border border-primary  p-2 rounded-md drop-shadow-sm w-full">
        <div className="font-bold whitespace-nowrap">Starting Age: </div>
        <div>{placeDetails?.age && placeDetails?.age.length <= 2 ? placeDetails?.age[0] : null}</div>
      </div>
      <div className="my-2 flex gap-2 border border-primary  p-2 rounded-md drop-shadow-sm w-full">
        <div className="font-bold whitespace-nowrap">Ending Age: </div>
        <div>{placeDetails?.age && placeDetails?.age.length <= 2 ? placeDetails?.age[1] : null}</div>
      </div>
    </div>
  )
}

export default AgeOverview
