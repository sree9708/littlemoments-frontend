"use client"

import React, { useState } from "react"
import { IoMdArrowDropdown } from "react-icons/io"
import useClickOutside from "@/hooks/useClickOutside"

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false)

  const handleDropdown = () => {
    setDropdown(!dropdown)
  }

  const clickOutsideRef = useClickOutside(() => {
    setDropdown(false)
  })

  return (
    <div className="relative inline-block text-left">
      <div
        ref={clickOutsideRef}
        className="flex gap-1 items-center p-1 hover:opacity-80 border-2 rounded-md bg-theme-1 border-primary text-secondary cursor-pointer"
        onClick={handleDropdown}
      >
        Mumbai
        <IoMdArrowDropdown />
      </div>
      {dropdown && (
        <div
          className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            <div
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-theme-1 transition duration-300 ease-in-out hover:text-secondary cursor-pointer"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              Bangalore
            </div>
            <div
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-theme-1 transition duration-300 ease-in-out hover:text-secondary cursor-pointer"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              Chennai
            </div>
            <div
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-theme-1 transition duration-300 ease-in-out hover:text-secondary cursor-pointer"
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
export default Dropdown
