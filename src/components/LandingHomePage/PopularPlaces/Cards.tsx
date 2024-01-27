"use client"

import Card from "@/components/Cards/PopularPlace/Card"
import CardLazy from "@/components/Cards/PopularPlace/CardLazy"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getPlaces, getPlacesBySkipAndLimit } from "@/services/Redux/reducers/placeSlice"
import React, { useEffect, useState } from "react"

const Cards: React.FC = () => {
  const [isClient, setIsClient] = useState(false)

  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(state => state.place?.isLoading)
  const places = useAppSelector(state => state.place?.places)

  useEffect(() => {
    setIsClient(true)
    async function fetchData() {
      if (places && places.length === 0) {
        try {
          await dispatch(getPlaces({ skip: 0, limit: 12 }))
        } catch (error: any) {
          console.log(error.message)
        }
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {isClient && (
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
              {Array.isArray(places) && places.length > 0 ? (
                places.map((place, index) => (
                  <Card
                    key={index}
                    _id={place._id}
                    heading={place.category}
                    placeName={place.placeName}
                    city={place.city}
                    image={place.displayImages && place.displayImages[0]}
                  />
                ))
              ) : (
                // <div className="w-full text-center text-2xl font-medium">No Places Found</div>
                <>
                  <CardLazy />
                  <CardLazy />
                  <CardLazy />
                  <CardLazy />
                </>
              )}
            </>
          )}
        </div>
      )}
    </>
  )
}

export default Cards
