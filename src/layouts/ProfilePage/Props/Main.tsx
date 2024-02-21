"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import Footer from "@/layouts/CommonLayouts/Footer"
import Marquee from "@/layouts/CommonLayouts/Marquee"
import Navbar from "@/layouts/CommonLayouts/Navbar"
import Hero from "@/layouts/ProfilePage/Props/Hero"
import HeroLazy from "@/layouts/ProfilePage/HeroLazy"
import { MoreDetails } from "@/layouts/ProfilePage/Props/MoreDetails"
import { useEffect } from "react"
import { getPropByIdThunk } from "@/services/Redux/reducers/propSlice"
import useMounted from "@/hooks/useMounted"
import { errorMessage } from "@/hooks/useNotifications"

const Main = () => {
  const dispatch = useAppDispatch()
  const propInformation = useAppSelector(state => state.prop?.propInformations)

  const hasMounted = useMounted()

  useEffect(() => {
    async function fetchData() {
      try {
        await dispatch(getPropByIdThunk(undefined))
      } catch (error: any) {
        errorMessage(error.message)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {hasMounted && (
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
    </>
  )
}

export default Main
