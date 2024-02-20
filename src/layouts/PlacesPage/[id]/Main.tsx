"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import Footer from "@/layouts/CommonLayouts/Footer"
import Marquee from "@/layouts/CommonLayouts/Marquee"
import Navbar from "@/layouts/CommonLayouts/Navbar"
import Hero from "@/layouts/PlacesPage/[id]/Hero"
import Informations from "@/layouts/PlacesPage/[id]/Informations"
import { MoreDetails } from "@/layouts/PlacesPage/[id]/MoreDetails"
import { Reviews } from "@/layouts/PlacesPage/[id]/Reviews"
import { getPlaceByIdThunk } from "@/services/Redux/reducers/placeSlice"
import { useParams, useRouter } from "next/navigation"
import { useRouter as nextRouter } from 'next/router'
import { useEffect } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HeroLazy from "@/layouts/PlacesPage/[id]/HeroLazy"
import { errorMessage } from "@/hooks/useNotifications"


export default function Main() {
  // const params = useParams()
  // const propId: string = params?.id as string
  
  const dispatch = useAppDispatch()
  const { push } = useRouter()
  const router = nextRouter()
  const propId: string = router.query.id as string
  
  useEffect(() => {
    if (propId) {
      const fetchData = async () => {
        try {
          await dispatch(getPlaceByIdThunk(propId))
        } catch (error: any) {
          errorMessage(error.message)
        }
      }
      fetchData()
    } else {
      push("/")
    }
  }, [])

  const placeDetails = useAppSelector(state => state.place?.placeDetails)

  if (!propId) {
    // If id is not available yet, return loading state or handle as necessary
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <Navbar searchBar={false} />
        <div className="padding">
          {placeDetails ? <Hero placeDetails={placeDetails} /> : <HeroLazy />}
          <Informations />
          <MoreDetails />
          <Reviews />
        </div>
        <Marquee />
        <Footer />
      </div>
    </>
  )
}
