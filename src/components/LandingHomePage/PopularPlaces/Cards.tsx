"use client"

import Card from "@/components/Cards/PopularPlace/Card"
import CardLazy from "@/components/Cards/PopularPlace/CardLazy"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getPlaceBySkipAndLimit } from "@/services/Redux/reducers/placeSlice"
import React, { useEffect, useState } from "react"

const Cards: React.FC = () => {
  console.log("Cards rendered") // Add this line

  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(state => state.place.isLoading)

  useEffect(() => {
    console.log("getPlaceBySkipAndLimit 1234567")
    async function fetchData() {
      if (places && places.length === 0) {
        try {
          await dispatch(getPlaceBySkipAndLimit({ skip: 0, limit: 12 }))
        } catch (error: any) {
          console.log(error.message)
        }
      }
    }
    fetchData()
  }, [])

  const places = useAppSelector(state => state.place.places)

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 md:gap-12 my-12 h-full">
      {isLoading ? (
        <>
          <CardLazy />
          <CardLazy />
          <CardLazy />
          <CardLazy />
        </>
      ) : (
        <>
          {Array.isArray(places) &&
            places.map((place, index) => (
              <Card
                key={index}
                _id={place._id}
                heading={place.category}
                placeName={place.placeName}
                city={place.city}
                image={place.displayImages && place.displayImages[0]}
              />
            ))}
        </>
      )}
    </div>
  )
}

export default Cards
