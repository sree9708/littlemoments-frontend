"use client"
import React, { useState } from "react"
import { RiSearchFill } from "react-icons/ri"

const SearchBar = () => {
  const [searchEvents, setSearchEvents] = useState("")
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchEvents(event.target.value)
  }
  return (
    <div className="flex justify-center my-6">
      <div className="w-4/5 md:w-3/5 lg:w-2/5 relative flex items-center rounded-md bg-theme-color-2 drop-shadow-[5px_5px_0_rgba(0,0,0,1)]">
        <input
          type="text"
          value={searchEvents}
          onChange={handleSearch}
          placeholder="Search near you"
          className="w-full px-4 py-3  border-2 border-primary rounded-md focus:outline-none focus:ring-1 bg-transparent focus:ring-primary placeholder-primary"
        />
        <div className="absolute right-5">
          <RiSearchFill />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
