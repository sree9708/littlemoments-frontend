import React, { useEffect, useRef, useState } from "react"
import Slider from "react-slider"

type RangeFilterProps = {
  title: string
  initialMin: number
  initialMax: number
  min: number
  max: number
  step: number
  priceCap: number
}

const RangeFilter = ({ title, initialMin, initialMax, min, max, step, priceCap }: RangeFilterProps) => {
  const progressRef = useRef<HTMLDivElement>(null)
  const [minValue, setMinValue] = useState<number>(initialMin)
  const [maxValue, setMaxValue] = useState<number>(initialMax)

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.left = `${(minValue / max) * 100}%`
      progressRef.current.style.right = `${(1 - maxValue / max) * 100}%`
    }
  }, [minValue, maxValue, max])

  return (
    <>
      <div className="font-semibold">{title}</div>
      <div className="flex justify-between items-center my-3">
        <div className="rounded-md flex justify-start w-full">
          <div className="me-2"> Min</div>
          <input
            onChange={e => setMinValue(parseInt(e.target.value, 10))}
            type="number"
            value={minValue}
            className="w-24 rounded-md border border-gray-400"
          />
        </div>
        <div className="  text-lg"> - </div>
        <div className="rounded-md flex justify-end w-full">
          <div className="me-2"> Max</div>
          <input
            onChange={e => setMaxValue(parseInt(e.target.value, 10))}
            type="number"
            value={maxValue}
            className="w-24 rounded-md border border-gray-400"
          />
        </div>
      </div>
      <div className="my-6">
        <div className="slider relative h-1 rounded-md bg-gray-300">
          <div className="progress absolute h-1 bg-green-300 rounded " ref={progressRef}></div>
        </div>
        <Slider
          min={min}
          max={max}
          step={step}
          value={[minValue, maxValue]}
          onChange={values => {
            setMinValue(values[0])
            setMaxValue(values[1])
          }}
          className={"slider"}
        />
      </div>
    </>
  )
}

export default RangeFilter
