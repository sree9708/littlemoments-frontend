import React from "react"
import SingleReview from "./SingleReview"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const Reviews = () => {
  return (
    <div>
      <SingleReview name="LAILA JOHN" place="MUMBAI" title="The best out there!" date="May 12, 2023" />
      <SingleReview
        name="MATT DAMON"
        place="DELHI"
        title="A Must-Have for Event Enthisiasts!"
        date="May 12, 2023"
      />
      <SingleReview
        name="MELLISA DUNBAR"
        place="BANGALORE"
        title="Local Events at Your Fingertips!"
        date="May 12, 2023"
      />
      <div className="flex gap-2 justify-end">
        <div className="p-3 border-2 rounded-full border-primary w-fit bg-secondary hover:bg-theme-color-4 cursor-pointer">
          <IoIosArrowBack />
        </div>
        <div className="p-3 border-2 rounded-full border-primary w-fit bg-secondary hover:bg-theme-color-4 cursor-pointer">
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  )
}

export default Reviews
