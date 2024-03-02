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
      {showTitle && (
        <div className="transition-transform duration-300 ease-in-out  font-title text-theme-1 hidden sm:block sm:text-2xl mx-4 whitespace-nowrap">
          <CompanyName />
        </div>
      )}
      <div className="block">
        <LocationDropdownFull />
      </div>
      {searchBar && showSearch && <SearchNavbar />}
    </div>
  )
}

export default LeftSide
