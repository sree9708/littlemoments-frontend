"use client"
import React, { useState } from "react"

const SearchNavbar = () => {
  const [searchEvents, setSearchEvents] = useState("")
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchEvents(event.target.value)
  }
  return (
    <div className="mx-4 w-full">
      <div className="w-full relative flex items-center rounded-md">
        <input
          type="text"
          value={searchEvents}
          onChange={handleSearch}
          placeholder="&#128269; Search nearby places..."
          className="w-full min-w-[300px] px-2 sm:px-4 py-1 sm:py-2 pr-2 rounded-md focus:outline-none bg-transparent placeholder-primary"
        />
        <div className="absolute right-5">{/* <RiSearchFill /> */}</div>
      </div>
    </div>
  )
}

export default SearchNavbar
