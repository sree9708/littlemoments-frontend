"use client"

import TrackerLine from "@/components/AddPlacePage/Tracker/TrackerLine"
import TrackerRound from "@/components/AddPlacePage/Tracker/TrackerRound"
import { TrackerContext, TrackerContextProps } from "@/services/Context/TrackerContext"
import React, { useContext } from "react"

const Tracker = () => {
  const { isTracker } = useContext(TrackerContext) as TrackerContextProps

  return (
    <div className="flex w-full justify-center mb-8">
      <TrackerRound number={1} isTracker={isTracker} />
      <TrackerLine />
      <TrackerRound number={2} isTracker={isTracker} />
      <TrackerLine />
      <TrackerRound number={3} isTracker={isTracker} />
      <TrackerLine />
      <TrackerRound number={4} isTracker={isTracker} />
      <TrackerLine />
      <TrackerRound number={5} isTracker={isTracker} />
    </div>
  )
}

export default Tracker
