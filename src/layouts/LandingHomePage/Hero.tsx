import Cards from "@/components/LandingHomePage/Hero/Cards"
import SearchBar from "@/components/Inputs/SearchBar"
import Title from "@/components/LandingHomePage/Hero/Title"
import React from "react"
import FeacturesButton from "@/components/Buttons/FeacturesButton"

const Hero = () => {
  return (
    <main className="padding mt-20">
      <Title />
      <SearchBar />
      <div className="my-16">
        <Cards />
        <FeacturesButton />
      </div>
    </main>
  )
}

export default Hero
