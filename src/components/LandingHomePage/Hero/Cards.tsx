import React from "react"
import Card from "../../Cards/FeaturesCard/Card"

const Cards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6 xl:gap-8 px-4">
      <Card title="Attraction" description="Lorem ipsum, dolor sit" badgeText="12 Places" />
      <Card title="Attraction" description="Lorem ipsum, dolor sit" badgeText="12 Places" />
      <Card title="Attraction" description="Lorem ipsum, dolor sit" badgeText="12 Places" />
      <Card title="Attraction" description="Lorem ipsum, dolor sit" badgeText="12 Places" />
      {/* <div className='hidden lg:flex xl:hidden'></div> */}
      <Card title="Attraction" description="Lorem ipsum, dolor sit" badgeText="12 Places" />
      <div className="flex lg:hidden">
        <Card title="Attraction" description="Lorem ipsum, dolor sit" badgeText="12 Places" />
      </div>
    </div>
  )
}

export default Cards
