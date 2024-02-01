"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import Footer from "@/layouts/CommonLayouts/Footer"
import Marquee from "@/layouts/CommonLayouts/Marquee"
import Navbar from "@/layouts/CommonLayouts/Navbar"
import Hero from "@/layouts/ProfilePage/Hero"
import { MoreDetails } from "@/layouts/ProfilePage/MoreDetails"
import HeroLazy from "@/layouts/ProfilePage/HeroLazy"
import DetailPageProvider from "@/services/Context/DetailPageContext"
import { useEffect, useState } from "react"
import { getReviewsByUserIdThunk } from "@/services/Redux/reducers/reviewSlice"
import { getUserByIdThunk } from "@/services/Redux/reducers/userSlice"
import useMounted from "@/hooks/useMounted"

export default function Home() {
  const userInformations = useAppSelector(state => state.user?.userInformations)

  const hasMounted = useMounted()
  const dispatch = useAppDispatch()

  useEffect(() => {
    async function getReviews() {
      try {
        await dispatch(getUserByIdThunk(undefined))
        await dispatch(getReviewsByUserIdThunk(userInformations?.id || ""))
      } catch (err) {
        console.log(err)
      }
    }
    getReviews()
  }, [])

  return (
    <DetailPageProvider>
      {hasMounted && (
        <div>
          <Navbar searchBar={false} />
          <div className="padding">
            {userInformations ? <Hero /> : <HeroLazy />}
            <MoreDetails />
          </div>
          <Marquee />
          <Footer />
        </div>
      )}
    </DetailPageProvider>
  )
}
