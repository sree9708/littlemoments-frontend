// ClientComponent.tsx
"use client"
import { useAppDispatch } from "@/hooks/useStore"
import { useEffect } from "react"

const ClientComponent = ({ children }: { children: any }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // dispatch
  }, [])

  return <>{children}</>
}

export default ClientComponent
