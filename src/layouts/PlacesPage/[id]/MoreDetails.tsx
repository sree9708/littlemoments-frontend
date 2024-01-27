import { MoreDetailsLeftSide } from "@/components/PlacesPage/[id]/MoreDetails/MoreDetailsLeftSide"
import MoreDetailsRightSide from "@/components/PlacesPage/[id]/MoreDetails/MoreDetailsRightSide"
import React from "react"

export const MoreDetails = () => {
  return (
    <div className="my-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <MoreDetailsLeftSide />
        <MoreDetailsRightSide />
      </div>
    </div>
  )
}
