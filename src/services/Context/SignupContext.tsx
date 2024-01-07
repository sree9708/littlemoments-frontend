"use client"

import { createContext, ReactNode, useState } from "react"

export interface SignupContextProps {
  isSignup: boolean
  setIsSignup: React.Dispatch<React.SetStateAction<boolean>>
  isLogin: boolean
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const SignupContext = createContext<SignupContextProps | null>(null)

interface ContextProps {
  children: ReactNode
}

export default function Context({ children }: ContextProps) {
  const [isSignup, setIsSignup] = useState<boolean>(true)
  const [isLogin, setIsLogin] = useState<boolean>(true)

  return (
    <SignupContext.Provider value={{ isSignup, setIsSignup, isLogin, setIsLogin }}>
      {children}
    </SignupContext.Provider>
  )
}
