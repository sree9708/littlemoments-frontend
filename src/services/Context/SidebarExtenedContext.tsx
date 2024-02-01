"use client"

import { createContext, ReactNode, useState } from "react"

export interface SidebarExtenedProps {
  extended: boolean
  setExtended: React.Dispatch<React.SetStateAction<boolean>>
}

export const SidebarExtened = createContext<SidebarExtenedProps | null>(null)

interface ContextProps {
  children: ReactNode
}

const SidebarExtenedProvider = ({ children }: ContextProps) => {
  const [extended, setExtended] = useState<boolean>(true)

  return <SidebarExtened.Provider value={{ extended, setExtended }}>{children}</SidebarExtened.Provider>
}

export default SidebarExtenedProvider
