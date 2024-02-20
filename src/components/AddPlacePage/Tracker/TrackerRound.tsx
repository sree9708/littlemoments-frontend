import React from "react"

type TrackerRoundProps = {
  number: number
  isTracker: number
}
const TrackerRound = ({ number, isTracker }: TrackerRoundProps) => {
  return (
    <div
      className={`border-2 border-primary rounded-full w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center ${
        isTracker >= number ? "opacity-100" : "opacity-50"
      } ${isTracker > number && "bg-primary text-secondary"} ${
        isTracker === number && "bg-theme-4 opacity-100"
      } `}
    >
      {number}
    </div>
  )
}

export default TrackerRound
