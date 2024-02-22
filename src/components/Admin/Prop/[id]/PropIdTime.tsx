import { useAppSelector } from "@/hooks/useStore"
import { ITimings } from "@/services/Utilities/interfaces/prop.interface"
import React, { useEffect, useState } from "react"
interface Schedule {
  [day: string]: string[] | "closed"
}

const PropIdTime: React.FC<any> = () => {
  const propDetails = useAppSelector(state => state.place.placeDetails)
  const [schedule, setSchedule] = useState<ITimings>(
    propDetails?.timings || {
      monday: ["closed"],
      tuesday: ["closed"],
      wednesday: ["closed"],
      thursday: ["closed"],
      friday: ["closed"],
      saturday: ["closed"],
      sunday: ["closed"],
    },
  )

  useEffect(() => {
    if (propDetails?.timings) {
      setSchedule(propDetails.timings)
    }
  }, [propDetails?.timings])

  return (
    <div className="my-4">
      <div className="text-xl font-semibold my-2">Timing :</div>
      <div className="p-2 w-full rounded-md border-2 border-primary">
        <div className="py-1">
          <div className="my-2 border bg-theme-1 font-bold text-secondary p-2 rounded-md drop-shadow-sm grid grid-cols-3">
            <div className="me-2 flex justify-center items-center">
              <div>Day</div>
            </div>
            <div className="w-full flex justify-center px-2">Staring At</div>
            <div className="w-full flex justify-center px-2">End At</div>
          </div>
          {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map(day => (
            <div
              key={day}
              className={`my-2 border border-primary  p-2 rounded-md drop-shadow-sm grid ${
                JSON.stringify(schedule[day]) === JSON.stringify(["closed"]) ? "grid-cols-3" : "grid-cols-3"
              }`}
            >
              <div className="me-2 w-full flex justify-center items-center ">
                <div>{day.charAt(0).toUpperCase() + day.slice(1)}</div>
              </div>
              {JSON.stringify(schedule[day]) === JSON.stringify(["closed"]) ? (
                <div className="w-full flex justify-center">
                  <div className="bg-theme-1 text-secondary p-1 px-2 text-sm border-2 border-primary w-fit rounded-full">
                    Closed
                  </div>
                </div>
              ) : (
                <>
                  <div className="w-full flex justify-center px-2">
                    {schedule[day] ? schedule[day][0] : ""} AM
                  </div>
                  <div className="w-full flex justify-center px-2">
                    {schedule[day] ? schedule[day][1] : ""} PM
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PropIdTime
