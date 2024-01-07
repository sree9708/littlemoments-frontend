import React from "react"
import CompanyName from "../../Texts/CompanyName"
import TagLine from "../../Texts/TagLine"

const Title = () => {
  return (
    <div>
      <div className="text-title-md md:text-title-lg font-title text-theme-color-1 flex justify-center text-center pt-12 sm:pt-16 md:pt-20 lg:pt-24">
        <CompanyName />
      </div>
      <div className="flex justify-center text-center font-bold text-2xl">
        <TagLine />
      </div>
    </div>
  )
}

export default Title
