import React from "react"
import SingleReview from "./SingleReview"

const Content: React.FC = () => {
  return (
    <div>
      <div className="w-full border-t border-gray-500 my-4"></div>
      <SingleReview name="LAILA JOHN" place="MUMBAI" title="The best out there!" date="May 12, 2023" />
      {/* <SingleReview
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
      /> */}
    </div>
  )
}

export default Content
