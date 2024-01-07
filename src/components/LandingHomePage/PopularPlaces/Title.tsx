import React from "react"

const Title = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="font-title text-title-sm md:text-title-md">
        <p>POPULAR PLACES</p>
        <p>NEAR BY</p>
      </div>
      <div className="w-full h-full flex items-end justify-end">
        <a href="/places">
          <button className="p-2 px-4 bg-primary text-secondary rounded-full">View More</button>
        </a>
      </div>
    </div>
  )
}

export default Title
