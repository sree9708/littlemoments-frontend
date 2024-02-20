"use client"

import { createContext, ReactNode, useState } from "react"

export interface TrackerContextProps {
  isTracker: number
  setIsTracker: React.Dispatch<React.SetStateAction<number>>
}

export const TrackerContext = createContext<TrackerContextProps | null>(null)

interface ContextProps {
  children: ReactNode
}

export default function Context({ children }: ContextProps) {
  const [isTracker, setIsTracker] = useState<number>(1)

  return <TrackerContext.Provider value={{ isTracker, setIsTracker }}>{children}</TrackerContext.Provider>
}
