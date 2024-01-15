"use client"

import { useAppDispatch } from "@/hooks/useStore"
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
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from "react"

export default function Home() {
  const { push } = useRouter()
  const params = useParams();
  const id: string = params?.id as string;

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      console.log("getPlaceById")
      try{
        const fetchData = async () => {
          await dispatch(getPlaceById(id))
        }
  
        fetchData();
      }catch(error){
        console.log(error)
      }
    }
  }, [])
  return (
    <DetailPageProvider>
      <div>
        <Navbar />
        <div className="padding">
          <Hero />
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
