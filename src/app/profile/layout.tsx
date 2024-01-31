"use client"

import { useAppSelector } from "@/hooks/useStore"
import React from "react"
import { redirect } from "next/navigation"
import { useEffect } from "react"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const userId = useAppSelector(state => state.user?.id)
  const propId = useAppSelector(state => state.prop?.id)
  useEffect(() => {
    if (!userId) {
      if (propId) {
        redirect("/profile/props")
      } else {
        redirect("/")
      }
    } else {
      if (!propId) {
        redirect("/profile")
      }
    }
  }, [])
  return <main>{children}</main>
}

export default RootLayout
