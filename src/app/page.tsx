import Footer from "@/layouts/CommonLayouts/Footer"
import Marquee from "@/layouts/CommonLayouts/Marquee"
import Navbar from "@/layouts/CommonLayouts/Navbar"
import AboutUs from "@/layouts/LandingHomePage/AboutUs"
import Hero from "@/layouts/LandingHomePage/Hero"
import PopularPlaces from "@/layouts/LandingHomePage/PopularPlaces"
import ClientComponent from "./ClientComponent"

export default function Home() {
  return (
    <div>
      <ClientComponent>
        <Navbar searchBar={true} />
        <Hero />
        <Marquee />
        <PopularPlaces />
        <AboutUs />
        <Marquee />
        <Footer />
      </ClientComponent>
    </div>
  )
}
