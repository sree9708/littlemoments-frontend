import Footer from "@/layouts/CommonLayouts/Footer"
import Marquee from "@/layouts/CommonLayouts/Marquee"
import Navbar from "@/layouts/CommonLayouts/Navbar"
import Informations from "@/layouts/PlacesPage/[id]/Informations"
import RelatedActivities from "@/layouts/PlacesPage/[id]/RelatedActivities"
import { Reviews } from "@/layouts/PlacesPage/[id]/Reviews"
import Hero from "@/layouts/ProfilePage/Hero"
import { MoreDetails } from "@/layouts/ProfilePage/MoreDetails"
import DetailPageProvider from "@/services/Context/DetailPageContext"

export default function Home() {
  return (
    <DetailPageProvider>
      <div>
        <Navbar />
        <div className="padding">
          <Hero />
          <MoreDetails />
        </div>
        <Marquee />
        <Footer />
      </div>
    </DetailPageProvider>
  )
}
