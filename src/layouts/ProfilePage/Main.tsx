"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import Footer from "@/layouts/CommonLayouts/Footer"
import Marquee from "@/layouts/CommonLayouts/Marquee"
import Navbar from "@/layouts/CommonLayouts/Navbar"
import Hero from "@/layouts/ProfilePage/Hero"
import { MoreDetails } from "@/layouts/ProfilePage/MoreDetails"
import HeroLazy from "@/layouts/ProfilePage/HeroLazy"
import { useEffect } from "react"
import { getReviewsByUserIdThunk } from "@/services/Redux/reducers/reviewSlice"
import { getUserByIdThunk } from "@/services/Redux/reducers/userSlice"
import useMounted from "@/hooks/useMounted"
import { errorMessage } from "@/hooks/useNotifications"
import { useRouter } from "next/navigation"

export default function Main() {
  const userInformations = useAppSelector(state => state.user?.userInformations)

  const hasMounted = useMounted()
  const dispatch = useAppDispatch()

  const userId = useAppSelector(state => state.user?.id)
  const propId = useAppSelector(state => state.prop?.id)

  const { push } = useRouter()
  useEffect(() => {
    if (!userId) {
      if (propId) {
        push("/profile/props")
      } else {
        push("/")
      }
    } else {
      if (!propId) {
        push("/profile")
      }
    }
  }, [])

  useEffect(() => {
    async function getReviews() {
      try {
        await dispatch(getUserByIdThunk(undefined))
        await dispatch(getReviewsByUserIdThunk(userInformations?.id || ""))
      } catch (err: any) {
        errorMessage(err.message)
      }
    }
    getReviews()
  }, [])

  return (
    <>
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
    </>
  )
}
