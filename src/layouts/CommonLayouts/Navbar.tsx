import ClientComponent from "@/app/ClientComponent"
import LeftSide from "@/components/Navbar/LeftSide"
import RightSide from "@/components/Navbar/RightSide"
import React from "react"

const Navbar = ({ searchBar = false }: { searchBar: boolean }) => {
  return (
    <div className="top-0 left-0 right-0 sticky z-20 bg-background">
      <nav className="mt-2  bg-background flex justify-between items-center  border-y-2 border-primary">
        <LeftSide searchBar={searchBar} />
        <RightSide />
      </nav>
    </div>
  )
}

export default Navbar
