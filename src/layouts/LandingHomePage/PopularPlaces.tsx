import Cards from "@/components/LandingHomePage/PopularPlaces/Cards"
import Title from "@/components/LandingHomePage/PopularPlaces/Title"
import React from "react"

const PopularPlaces = () => {
  return (
    // <div className="flex flex-col items-center" style={{ margin: '0px calc(10% + 36px)' }}>
    <div className="padding">
      <Title />
      <Cards />
    </div>
  )
}

export default PopularPlaces
