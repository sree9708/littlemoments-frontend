import Cards from "@/components/LandingHomePage/PopularPlaces/Cards"
import Title from "@/components/LandingHomePage/PopularPlaces/Title"
import { paddingScreen } from "@/services/Utilities/style"
import React from "react"

const PopularPlaces = () => {
  return (
    <div className="padding">
      <Title />
      <Cards />
    </div>
  )
}

export default PopularPlaces
