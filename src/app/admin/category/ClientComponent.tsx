"use client"

import { errorMessage } from "@/hooks/useNotifications"
import { useAppDispatch } from "@/hooks/useStore"
import { getCategoriesThunk } from "@/services/Redux/reducers/categorySlice"
import React, { ReactNode, useEffect } from "react"

const ClientComponent = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    ;(async () => {
      try {
        await dispatch(getCategoriesThunk())
      } catch (error: any) {
        errorMessage(error.message) 
        console.log(error.message)
      }
    })()
  }, [])

  return <div>{children}</div>
}

export default ClientComponent
