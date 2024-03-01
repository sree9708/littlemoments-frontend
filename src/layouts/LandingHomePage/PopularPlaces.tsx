"use client"

import Cards from "@/components/LandingHomePage/PopularPlaces/Cards"
import Title from "@/components/LandingHomePage/PopularPlaces/Title"
import { errorMessage } from "@/hooks/useNotifications"
import { useAppDispatch } from "@/hooks/useStore"
import { getPlacesThunk } from "@/services/Redux/reducers/placeSlice"
import React, { useEffect } from "react"


const PopularPlaces = () => {

  const dispatch = useAppDispatch()
  useEffect(() => {
    async function fetchData() {
      try {
        await dispatch(getPlacesThunk({ skip: 0, limit: 12 }))
      } catch (error: any) {
        errorMessage(error.message)
      }
    }
    fetchData()
  }, [])
  return (
    <div className="padding">
      <Title />
      <Cards />
    </div>
  )
}

export default PopularPlaces
