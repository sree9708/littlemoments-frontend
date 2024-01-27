"use client"

import Card from "@/components/Cards/PopularPlace/Card"
import React, { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getPlaces, getPlacesBySkipAndLimit } from "@/services/Redux/reducers/placeSlice"
import { IProp } from "@/services/Utilities/interfaces/prop.interface"

const Cards: React.FC = () => {
  const [skip, setSkip] = useState(0)
  const [hasError, setHasError] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(state => state.place?.isLoading)

  const places = useAppSelector(state => state.place?.places)

  useEffect(() => {
    async function fetchData() {
      if (places && places.length === 0) {
        try {
          await dispatch(getPlaces({ skip, limit: 20 }))
        } catch (error: any) {
          console.log(error.message)
        }
      }
    }
    fetchData()
    setIsClient(true)
  }, [])

  const fetchData = async () => {
    try {
      await dispatch(getPlacesBySkipAndLimit({ skip, limit: 20 }))
      setSkip(skip + 1)
    } catch (error) {
      console.error("Error fetching photos:", error)
      setHasError(true)
    }
  }

  return (
    <div className="w-full">
      {isClient && (
        <InfiniteScroll
          style={{ overflow: "visible" }}
          dataLength={places.length}
          next={fetchData}
          hasMore={isLoading}
          loader={
            <div className="w-full flex justify-center">
              <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          }
        >
          <div className="flex justify-center">
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 md:gap-12 my-12">
              {places &&
                places.map((place: IProp) => (
                  <Card
                    key={place._id}
                    _id={place._id}
                    heading={place.category}
                    placeName={place.placeName}
                    city={place.city}
                    image={place.displayImages && place.displayImages[0]}
                  />
                ))}
            </div>
          </div>
        </InfiniteScroll>
      )}
      {hasError && (
        <div className="w-full flex justify-center">
          <p>All places have been fetched or an error occurred.</p>
        </div>
      )}
    </div>
  )
}

export default Cards
