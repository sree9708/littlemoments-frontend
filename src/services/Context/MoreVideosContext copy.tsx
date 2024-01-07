"use client"

import { createContext, ReactNode, useState } from "react"

export interface SelectedImageContextProps {
  selectedImage: number | null
  setSelectedImage: React.Dispatch<React.SetStateAction<number | null>>
}

export const SelectedImageContext = createContext<SelectedImageContextProps | null>(null)

interface ContextProps {
  children: ReactNode
}

export default function Context({ children }: ContextProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <SelectedImageContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </SelectedImageContext.Provider>
  )
}
