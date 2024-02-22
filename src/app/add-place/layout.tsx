import AddPlaceProtectRoute from "@/layouts/ProtectRoute/AddPlaceProtectRoute"
import RightSide from "@/layouts/RegistrationPage/RightSide"
import TrackerProvider from "@/services/Context/TrackerContext"
import React from "react"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <AddPlaceProtectRoute>
      <TrackerProvider>
        <div className="grid grid-cols-12 w-full h-screen">
          {children}
          <RightSide text="REGISTRATION FORM" />
        </div>
      </TrackerProvider>
    // </AddPlaceProtectRoute>
  )
}

export default RootLayout
