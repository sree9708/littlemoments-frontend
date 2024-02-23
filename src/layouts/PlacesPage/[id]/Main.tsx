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
import { useEffect } from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HeroLazy from "@/layouts/PlacesPage/[id]/HeroLazy"
import { errorMessage } from "@/hooks/useNotifications"

export default function Main() {
  const dispatch = useAppDispatch()
  const { push } = useRouter()
  const { id }: { id: string } = useParams()

  useEffect(() => {
    console.log("prop id :", id)
    if (id) {
      const fetchData = async () => {
        try {
          await dispatch(getPlaceByIdThunk(id))
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
