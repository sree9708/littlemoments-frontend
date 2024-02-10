"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import Footer from "@/layouts/CommonLayouts/Footer"
import Marquee from "@/layouts/CommonLayouts/Marquee"
import Navbar from "@/layouts/CommonLayouts/Navbar"
import Hero from "@/layouts/PlacesPage/[id]/Hero"
import Informations from "@/layouts/PlacesPage/[id]/Informations"
import { MoreDetails } from "@/layouts/PlacesPage/[id]/MoreDetails"
import { Reviews } from "@/layouts/PlacesPage/[id]/Reviews"
import DetailPageProvider from "@/services/Context/DetailPageContext"
import { getPlaceByIdThunk } from "@/services/Redux/reducers/placeSlice"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HeroLazy from "@/layouts/PlacesPage/[id]/HeroLazy"

export default function Home() {
  const params = useParams()
  const propId: string = params?.id as string

  const dispatch = useAppDispatch()
  const { push } = useRouter()
  useEffect(() => {
    if (propId) {
      const fetchData = async () => {
        try {
          await dispatch(getPlaceByIdThunk(propId))
        } catch (error: any) {
          console.log(error.message)
        }
      }
      fetchData()
    } else {
      push("/")
    }
  }, [])

  const placeDetails = useAppSelector(state => state.place?.placeDetails)

  return (
    <DetailPageProvider>
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
    </DetailPageProvider>
  )
}
