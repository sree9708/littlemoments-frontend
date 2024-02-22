"use client"

import { errorMessage } from "@/hooks/useNotifications"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { logoutProp, verifyPropIdThunk } from "@/services/Redux/reducers/propSlice"
import { logoutUser } from "@/services/Redux/reducers/userSlice"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

const AddPlaceProtectRoute = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter()
  const dispatch = useAppDispatch()
  const proId = useAppSelector(state => state.prop?.id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (proId) {
          await dispatch(verifyPropIdThunk(proId))
          dispatch(logoutUser())
        } else {
          push("/")
        }
      } catch (error: any) {
        errorMessage("Please login")
        dispatch(logoutProp())
        push("/")
      }
    }

    fetchData()

    // Cleanup function if needed
    // return () => {
    //   // Perform cleanup actions if necessary
    // }
  }, [proId, dispatch, push])

  return <div>{children}</div>
}

export default AddPlaceProtectRoute
