"use client"

import { createContext, ReactNode, useState } from "react"

export interface DetailPageContextProps {
  selectedImage: number | null
  setSelectedImage: React.Dispatch<React.SetStateAction<number | null>>
  moreVideos: boolean
  setMoreVideos: React.Dispatch<React.SetStateAction<boolean>>
}

export const DetailPageContext = createContext<DetailPageContextProps | null>(null)

interface ContextProps {
  children: ReactNode
}

export default function Context({ children }: ContextProps) {
  const [moreVideos, setMoreVideos] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <DetailPageContext.Provider value={{ selectedImage, setSelectedImage, moreVideos, setMoreVideos }}>
      {children}
    </DetailPageContext.Provider>
  )
}
