"use client"

import LocationDropdownFull from "../Dropdowns/LocationDropdownFull"
import { useEffect, useState } from "react"
import CompanyName from "../Texts/CompanyName"
import SearchNavbar from "../Inputs/SearchNavbar"

const LeftSide = ({ searchBar }: { searchBar: boolean }) => {
  const [showTitle, setShowTitle] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      setShowTitle(scrollY >= 250)
      setShowSearch(scrollY >= 350)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="flex items-center w-fit">
      {/* <div className="px-2 sm:px-4 md:px-8 lg:px-12 ">
        <div className="flex gap-2 sm:gap-6 md:gap-10 my-2">
        <Dropdown />
      </div> */}
      {showTitle && (
        <div className="transition-transform duration-300 ease-in-out  font-title text-theme-1 text-lg sm:text-3xl mx-4 whitespace-nowrap">
          <CompanyName />
        </div>
      )}
      <div className="hidden md:block">
        <LocationDropdownFull />
      </div>
      {searchBar && showSearch && <SearchNavbar />}
    </div>
  )
}

export default LeftSide
