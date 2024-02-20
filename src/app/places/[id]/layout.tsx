import React, { ReactNode } from 'react'
import DetailPageProvider from "@/services/Context/DetailPageContext"

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <DetailPageProvider>{children}</DetailPageProvider>
  )
}

export default layout