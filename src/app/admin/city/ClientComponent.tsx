"use client"

import { errorMessage } from "@/hooks/useNotifications"
import { useAppDispatch } from "@/hooks/useStore"
import { getCitiesThunk } from "@/services/Redux/reducers/citySlice"
import React, { ReactNode, useEffect } from "react"

const ClientComponent = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    ;(async () => {
      try {
        await dispatch(getCitiesThunk())
      } catch (error: any) {
        errorMessage(error.message) 
        console.log(error.message)
      }
    })()
  }, [])

  return <div>{children}</div>
}

export default ClientComponent
