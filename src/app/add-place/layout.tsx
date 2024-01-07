import TrackerProvider from "@/services/Context/TrackerContext"
import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TrackerProvider>
        <main>{children}</main>
      </TrackerProvider>
    </>
  )
}

export default layout
