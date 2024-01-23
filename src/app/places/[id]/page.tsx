"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import Footer from "@/layouts/CommonLayouts/Footer"
import Marquee from "@/layouts/CommonLayouts/Marquee"
import Navbar from "@/layouts/CommonLayouts/Navbar"
import Hero from "@/layouts/PlacesPage/[id]/Hero"
import Informations from "@/layouts/PlacesPage/[id]/Informations"
import { MoreDetails } from "@/layouts/PlacesPage/[id]/MoreDetails"
import RelatedActivities from "@/layouts/PlacesPage/[id]/RelatedActivities"
import { Reviews } from "@/layouts/PlacesPage/[id]/Reviews"
import DetailPageProvider from "@/services/Context/DetailPageContext"
import { getPlaceById } from "@/services/Redux/reducers/placeSlice"
import { useParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HeroLazy from "@/layouts/PlacesPage/[id]/HeroLazy"
import { getReviewsByPropId } from "@/services/Redux/reducers/reviewSlice"

export default function Home() {
  const { push } = useRouter()
  const params = useParams()
  const propId: string = params?.id as string

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (propId) {
      const fetchData = async () => {
        try {
          await dispatch(getPlaceById(propId))
          await dispatch(getReviewsByPropId(propId))
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
          {/* <RelatedActivities /> */}
        </div>
        <Marquee />
        <Footer />
      </div>
    </DetailPageProvider>
  )
}
