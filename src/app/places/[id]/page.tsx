import Footer from "@/layouts/CommonLayouts/Footer"
import Marquee from "@/layouts/CommonLayouts/Marquee"
import Navbar from "@/layouts/CommonLayouts/Navbar"
import Hero from "@/layouts/PlacesPage/[id]/Hero"
import Informations from "@/layouts/PlacesPage/[id]/Informations"
import { MoreDetails } from "@/layouts/PlacesPage/[id]/MoreDetails"
import RelatedActivities from "@/layouts/PlacesPage/[id]/RelatedActivities"
import { Reviews } from "@/layouts/PlacesPage/[id]/Reviews"
import DetailPageProvider from "@/services/Context/DetailPageContext"

export default function Home() {
  return (
    <DetailPageProvider>
      <div>
        <Navbar />
        <div className="padding">
          <Hero />
          <Informations />
          <MoreDetails />
          <Reviews />
          <RelatedActivities />
        </div>
        <Marquee />
        <Footer />
      </div>
    </DetailPageProvider>
  )
}
