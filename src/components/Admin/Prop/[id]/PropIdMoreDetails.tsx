import React from "react"
import PropIdTime from "./PropIdTime"
import PropIdCategory from "./PropIdCategory"
import PropIdAge from "./PropIdAge"
import PropIdRateCard from "./PropIdRateCard"
import PropIdImages from "./PropIdImages"

const PropIdMoreDetails = () => {
  return (
    <div className="my-4 w-ful bg-secondary rounded-lg p-4 lg:p-8 drop-shadow-md">
      <PropIdTime />
      <PropIdCategory />
      <PropIdAge />
      <PropIdRateCard />
      <PropIdImages />
    </div>
  )
}

export default PropIdMoreDetails
