"use client"
import AddPlaceProtectRoute from "@/layouts/ProtectRoute/AddPlaceProtectRoute"
import TrackerProvider from "@/services/Context/TrackerContext"
import React, { useEffect, useState } from "react"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AddPlaceProtectRoute>
      <TrackerProvider>
        <main>{children}</main>
      </TrackerProvider>
    </AddPlaceProtectRoute>
  )
}

export default RootLayout
