"use client"

import React, { useState } from "react"
import CityFilter from "../Filters/CityFilter"
import CategoryFilter from "../Filters/CategoryFilter"
import AgeFilter from "../Filters/AgeFilter"
import RangeFilter from "../Filters/RangeFilter"

const Filter = () => {
  const [isSidebar, setIsSidebar] = useState(false)

  return (
    <aside
      id="logo-sidebar"
      className={`h-fit top-0 left-0 z-10 min-w-[350px] px-4 pt-20 pb-4 transition-transform  ${
        isSidebar ? "translate-x-0" : "-translate-x-full"
      } hidden md:block  md:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full p-4 border-2 border-primary bg-white rounded-md drop-shadow-[10px_10px_0_rgba(0,0,0,1)]">
        <div className=" flex justify-between">
          <div className="text-lg font-bold">Filter</div>
          <div className="cursor-pointer hover:text-theme-3 hover:underline">Clear All</div>
        </div>
        <div>
          <div className="w-full border my-2 mb-6 border-gray-400"></div>
          <CityFilter />
          <div className="w-full border my-2 mb-6 border-gray-400"></div>
          <RangeFilter
            title="Price"
            initialMin={0}
            initialMax={10000}
            min={0}
            max={10000}
            step={100}
            priceCap={1000}
          />
          <div className="w-full border my-8 border-gray-400"></div>
          <CategoryFilter title="Categories" />
          <div className="w-full border my-8 border-gray-400"></div>
          <CategoryFilter title="Sub Categories" />
          <div className="w-full border my-8 border-gray-400"></div>
          <AgeFilter />
          {/* <CategoryFilter />
        <div className="w-full border my-8 border-gray-400"></div>
        <CategoryFilter />
        <div className="w-full border my-8 border-gray-400"></div>
        <CategoryFilter /> */}
        </div>
      </div>
    </aside>
  )
}

export default Filter
