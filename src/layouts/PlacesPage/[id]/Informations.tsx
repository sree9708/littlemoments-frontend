"use client"

import { InformationsLeftSide } from "@/components/PlacesPage/[id]/Informations/InformationsLeftSide"
import { InformationsRightSide } from "@/components/PlacesPage/[id]/Informations/InformationsRightSide"
import React from "react"

const Informations: React.FC = () => {
  return (
    <div className="my-12 w-full grid grid-cols-1 sm:grid-cols-12 bg-secondary border-2 border-primary rounded-lg p-8 drop-shadow-[10px_10px_0_rgba(0,0,0,1)]">
      <InformationsLeftSide />
      <InformationsRightSide />
    </div>
  )
}

export default Informations
