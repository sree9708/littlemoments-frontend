"use client"

import React, { useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io"

const LocationDropdownFull = () => {
  const [dropdown, setDropdown] = useState(false)

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }
  return (
    <div className="relative inline-block text-left">
      <div
        className="flex items-center gap-2 py-4 px-2 sm:px-4 md:px-8 lg:px-12 bg-theme-color-1 text-background cursor-pointer hover:opacity-80"
        onClick={handleDropdown}
      >
        <div>Mumbai</div>
        <div>
          <IoMdArrowDropdown />
        </div>
      </div>
      {dropdown && (
        <div
          className="absolute left-2 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <div
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-theme-color-1 transition duration-300 ease-in-out hover:text-secondary cursor-pointer"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Bangalore
            </div>
            <div
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-theme-color-1 transition duration-300 ease-in-out hover:text-secondary cursor-pointer"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              Chennai
            </div>
            <div
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-theme-color-1 transition duration-300 ease-in-out hover:text-secondary cursor-pointer"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-2"
            >
              Delhi
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default LocationDropdownFull
