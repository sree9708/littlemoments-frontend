import SearchBar from "@/components/Inputs/SearchBar"
import React from "react"
import Title from "@/components/PlacesPage/Hero/Title"
import Cards from "./Cards"

const Hero = () => {
  return (
    <div className="w-full mx-5 my-12 p-4 pt-16">
      <Title />
      <SearchBar />
      <Cards />
    </div>
  )
}

export default Hero
