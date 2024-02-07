import CategoryInformations from "@/components/Admin/Category/CategoryInformations"
import CategoryHeading from "@/components/Admin/Category/CategoryHeading"
import React from "react"

const CategoryContent = () => {
  return (
    <div className="p-3">
      <CategoryHeading />
      <CategoryInformations />
    </div>
  )
}

export default CategoryContent
