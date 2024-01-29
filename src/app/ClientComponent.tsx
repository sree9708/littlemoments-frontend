"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { logoutProp, verifyPropIdThunk } from "@/services/Redux/reducers/propSlice"
import { logoutUser, verifyTokenThunk, verifyUserIdThunk } from "@/services/Redux/reducers/userSlice"
import { useEffect } from "react"

const ClientComponent = ({ children }: { children: any }) => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(state => state.user?.id)
  const proId = useAppSelector(state => state.prop?.id)

  useEffect(() => {
    if (userId) {
      ;(async () => {
        try {
          await dispatch(verifyUserIdThunk(userId))
          dispatch(logoutProp())
        } catch (error: any) {
          dispatch(logoutUser())
        }
      })()
    } else if (proId) {
      ;(async () => {
        try {
          await dispatch(verifyPropIdThunk(proId))
          dispatch(logoutUser())
        } catch (error: any) {
          dispatch(logoutProp())
        }
      })()
    } else {
      ;(async () => {
        try {
          await dispatch(verifyTokenThunk())
        } catch (error: any) {
          console.log(error)
        }
      })()
    }
  }, [userId, proId, dispatch])

  return <div>{children}</div>
}

export default ClientComponent
