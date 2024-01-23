"use client"

import { useAppSelector } from "@/hooks/useStore"
import React from "react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
  return <main>{children}</main>
}

export default RootLayout
