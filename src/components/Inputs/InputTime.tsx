import useClickOutside from "@/hooks/useClickOutside"
import { ITimings } from "@/services/Utilities/interfaces/prop.interface"
import React, { useEffect, useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io"

interface Schedule {
  [day: string]: string[] | "closed"
}

const timeOptions: string[] = [
  "12:00",
  "12:30",
  "1:00",
  "1:30",
  "2:00",
  "2:30",
  "3:00",
  "3:30",
  "4:00",
  "4:30",
  "5:00",
  "5:30",
  "6:00",
  "6:30",
  "7:00",
  "7:30",
  "8:00",
  "8:30",
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
]

const InputTime: React.FC<any> = ({
  onTimeChange,
  timings,
}: {
  onTimeChange: (data: any) => void
  timings: Schedule
}) => {
  const [dropdown, setDropdown] = useState(false)
  const [schedule, setSchedule] = useState<Schedule>(
    timings || {
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
    onTimeChange(schedule)
  }, [schedule, onTimeChange])

  // const dropdownRef = useRef<HTMLDivElement>(null);

  const clickOutsideRef = useClickOutside(() => {
    setDropdown(false)
  })

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  const handleCheckboxChange = (day: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSchedule(prevSchedule => ({ ...prevSchedule, [day]: ["12:00", "12:00"] }))
    } else {
      const { [day]: _, ...rest } = schedule
      setSchedule({ ...rest, [day]: ["closed"] })
    }
  }

  const handleStartTimeChange = (day: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const startTime = e.target.value
    setSchedule(prevSchedule => ({
      ...prevSchedule,
      [day]: [startTime, prevSchedule[day] ? prevSchedule[day][1] : "12:00"],
    }))
  }

  const handleEndTimeChange = (day: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const endTime = e.target.value
    setSchedule(prevSchedule => ({
      ...prevSchedule,
      [day]: [prevSchedule[day] ? prevSchedule[day][0] : "12:00", endTime],
    }))
  }

  return (
    <div ref={clickOutsideRef} className="relative w-full text-left">
      <div
        className="flex justify-between w-full bg-transparent rounded-lg p-3 my-3 border-2  text-xl border-primary focus:outline-none focus:ring-transparent"
        onClick={handleDropdown}
      >
        <div className="">Time</div>
        <IoMdArrowDropdown />
      </div>
      {dropdown && (
        <div
          className="absolute left-0 p-2 z-20 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map(day => (
              <div key={day} className="my-2 flex justify-between border  p-2 rounded-md drop-shadow-sm">
                <div className="me-2 flex items-center">
                  <input
                    className="w-4 h-4 me-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
                    type="checkbox"
                    id={day}
                    name={day}
                    value={day}
                    onChange={handleCheckboxChange(day)}
                    checked={JSON.stringify(schedule[day]) !== JSON.stringify(["closed"])}
                  />
                  <label htmlFor={day}>{day.charAt(0).toUpperCase() + day.slice(1)}</label>
                </div>
                {JSON.stringify(schedule[day]) === JSON.stringify(["closed"]) ? (
                  <div className="bg-theme-1 text-secondary p-1 px-2 text-sm border-2 border-primary w-fit rounded-full">
                    Closed
                  </div>
                ) : (
                  <div className="w-full flex">
                    <div className="w-full px-2">
                      <div className="relative">
                        <select
                          className="w-full border-b border-primary focus:outline-none focus:ring-transparent"
                          value={schedule[day] ? schedule[day][0] : ""}
                          onChange={(e: any) => handleStartTimeChange(day)(e)}
                        >
                          <option value="" disabled>
                            Start Time
                          </option>
                          {timeOptions.map((time: string, index: number) => (
                            <option key={index} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        <div className="absolute top-0 right-0">AM</div>
                      </div>
                    </div>
                    <div className="text-theme-1">to</div>
                    <div className="w-full px-2">
                      <div className="relative">
                        <select
                          className="w-full border-b border-primary focus:outline-none focus:ring-transparent"
                          value={schedule[day] ? schedule[day][1] : ""}
                          onChange={(e: any) => handleEndTimeChange(day)(e)}
                        >
                          <option value="" disabled>
                            End Time
                          </option>
                          {timeOptions.map((time: string, index: number) => (
                            <option key={index} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        <div className="absolute top-0 right-0">PM</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default InputTime
