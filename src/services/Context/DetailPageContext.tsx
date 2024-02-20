"use client"

import { createContext, ReactNode, useState } from "react"

export interface DetailPageContextProps {
  moreVideos: boolean
  setMoreVideos: React.Dispatch<React.SetStateAction<boolean>>
}

export const DetailPageContext = createContext<DetailPageContextProps | null>(null)

interface ContextProps {
  children: ReactNode
}

export default function Context({ children }: ContextProps) {
  const [moreVideos, setMoreVideos] = useState<boolean>(false)

  return (
    <DetailPageContext.Provider value={{ moreVideos, setMoreVideos }}>{children}</DetailPageContext.Provider>
  )
}
