import Footer from "@/layouts/CommonLayouts/Footer"
import Marquee from "@/layouts/CommonLayouts/Marquee"
import Navbar from "@/layouts/CommonLayouts/Navbar"
import Hero from "@/layouts/ProfilePage/Props/Hero"
import { MoreDetails } from "@/layouts/ProfilePage/Props/MoreDetails"
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
