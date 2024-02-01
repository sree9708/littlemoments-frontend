"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { logoutProp, verifyPropIdThunk } from "@/services/Redux/reducers/propSlice"
import { logoutUser } from "@/services/Redux/reducers/userSlice"
import { redirect } from "next/navigation"
import React, { useEffect } from "react"

const AddPlaceProtectRoute = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch()
  const proId = useAppSelector(state => state.prop?.id)

  useEffect(() => {
    if (proId) {
      ;(async () => {
        try {
          await dispatch(verifyPropIdThunk(proId))
          dispatch(logoutUser())
        } catch (error: any) {
          dispatch(logoutProp())
        }
      })()
    } else {
      redirect("/")
    }
  }, [])

  return <div>{children}</div>
}

export default AddPlaceProtectRoute
