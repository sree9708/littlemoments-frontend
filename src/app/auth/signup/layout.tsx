import React from "react"
import SignupProvider from "@/services/Context/SignupContext"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SignupProvider>{children}</SignupProvider>
  )
}

export default RootLayout
