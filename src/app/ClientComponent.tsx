"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { logoutProp, verifyPropId } from "@/services/Redux/reducers/propSlice"
import { logoutUser, verifyUserId } from "@/services/Redux/reducers/userSlice"
import { useEffect } from "react"

const ClientComponent = ({ children }: { children: any }) => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(state => state.user?.id)
  const proId = useAppSelector(state => state.prop?.id)

  useEffect(() => {
    if (userId) {
      ;(async () => {
        try {
          await dispatch(verifyUserId(userId))
          dispatch(logoutProp())
        } catch (error: any) {
          dispatch(logoutUser())
        }
      })()
    } else if (proId) {
      ;(async () => {
        try {
          await dispatch(verifyPropId(proId))
          dispatch(logoutUser())
        } catch (error: any) {
          dispatch(logoutProp())
        }
      })()
    }
  }, [])

  return <div>{children}</div>
}

export default ClientComponent
