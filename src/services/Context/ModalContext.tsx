"use client"

import { createContext, ReactNode, useState } from "react"

export interface ModalProps {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext<ModalProps | null>(null)

interface ContextProps {
  children: ReactNode
}

const ModalProvider = ({ children }: ContextProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>{children}</ModalContext.Provider>
}

export default ModalProvider
