import DetailPageProvider from "@/services/Context/DetailPageContext"
import React, { ReactNode } from "react"

const layout = ({ children }: { children: ReactNode }) => {
  return <DetailPageProvider>{children}</DetailPageProvider>
}

export default layout
