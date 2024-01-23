"use client"

import ClientComponent from "@/app/ClientComponent"
import { useAppSelector } from "@/hooks/useStore"
import Footer from "@/layouts/CommonLayouts/Footer"
import Marquee from "@/layouts/CommonLayouts/Marquee"
import Navbar from "@/layouts/CommonLayouts/Navbar"
import Hero from "@/layouts/ProfilePage/Props/Hero"
import HeroLazy from "@/layouts/ProfilePage/HeroLazy"
import { MoreDetails } from "@/layouts/ProfilePage/Props/MoreDetails"
import DetailPageProvider from "@/services/Context/DetailPageContext"
import { useEffect, useState } from "react"

export default function Home() {
  const propInformation = useAppSelector(state => state.prop?.propInformations)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <DetailPageProvider>
      {isClient && (
        <div>
          <Navbar searchBar={false} />
          <div className="padding">
            {propInformation ? <Hero /> : <HeroLazy />}
            <MoreDetails />
          </div>
          <Marquee />
          <Footer />
        </div>
      )}
    </DetailPageProvider>
  )
}
