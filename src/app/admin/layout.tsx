import SidebarExtenedProvider from "@/services/Context/SidebarExtenedContext"
import React, { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return <SidebarExtenedProvider>{children}</SidebarExtenedProvider>
}

export default layout
