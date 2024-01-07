import Content from "@/components/PlacesPage/[id]/Reviews/Content"
import Pagination from "@/components/PlacesPage/[id]/Reviews/Pagination"
import { Title } from "@/components/PlacesPage/[id]/Reviews/Title"
import React from "react"

export const Reviews = () => {
  return (
    <div className="my-12">
      <Title />
      <Content />
      <Pagination />
    </div>
  )
}
