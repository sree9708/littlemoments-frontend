"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { logoutProp, verifyPropIdThunk } from "@/services/Redux/reducers/propSlice"
import { logoutUser, verifyUserIdThunk } from "@/services/Redux/reducers/userSlice"
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
    }
  }, [userId, proId, dispatch])

  return <div>{children}</div>
}

export default ClientComponent
