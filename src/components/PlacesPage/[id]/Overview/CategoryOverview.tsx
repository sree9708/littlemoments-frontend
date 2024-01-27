import { useAppSelector } from "@/hooks/useStore"
import React from "react"

const CategoryOverview = () => {
  const placeDetails = useAppSelector(state => state.place?.placeDetails)

  return (
    <div className="block lg:flex gap-2 w-full my-2">
      <div className="my-2 flex gap-2 border border-primary  p-2 rounded-md drop-shadow-sm w-full">
        <div className="font-bold whitespace-nowrap">Category : </div>
        <div>{placeDetails?.category}</div>
      </div>
      <div className="my-2 flex gap-2 border border-primary  p-2 rounded-md drop-shadow-sm w-full">
        <div className="font-bold whitespace-nowrap">Sub Category : </div>
        <div>{placeDetails?.subCategory}</div>
      </div>
    </div>
  )
}

export default CategoryOverview
