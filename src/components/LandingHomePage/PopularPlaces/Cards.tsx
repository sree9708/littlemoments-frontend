import Card from "@/components/Cards/PopularPlace/Card"
import CardLazy from "@/components/Cards/PopularPlace/CardLazy"
import useMounted from "@/hooks/useMounted"
import { errorMessage } from "@/hooks/useNotifications"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getPlacesThunk } from "@/services/Redux/reducers/placeSlice"
import React, { useEffect } from "react"

const Cards: React.FC = () => {
  const hasMounted = useMounted()

  const isLoading = useAppSelector(state => state.place?.isLoading)
  const places = useAppSelector(state => state.place?.places) || []

 

  return (
    <>
      {hasMounted && (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 md:gap-12 my-12 h-full">
          {isLoading ? (
            <>
              <CardLazy />
              <CardLazy />
              <CardLazy />
              <CardLazy />
            </>
          ) : places.length > 0 ? (
            places.map((place, index) => (
              <Card
                key={index}
                id={place.id}
                heading={place.category}
                placeName={place.placeName}
                city={place.city}
                image={place.displayImages && place.displayImages[0]}
              />
            ))
          ) : (
            <div className="w-full text-center text-2xl font-medium">No Places Found</div>
          )}
        </div>
      )}
    </>
  )
}

export default Cards
