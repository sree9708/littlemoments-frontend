"use client"

import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import {
  logoutProp,
  logoutPropThunk,
  verifyPropIdThunk,
  verifyPropTokenThunk,
} from "@/services/Redux/reducers/propSlice"
import {
  logoutUser,
  verifyUserTokenThunk,
  verifyUserIdThunk,
  logoutUserThunk,
} from "@/services/Redux/reducers/userSlice"
import { useCallback, useEffect } from "react"

const ClientComponent = ({ children }: { children: any }) => {
  const dispatch = useAppDispatch()
  const userId = useAppSelector(state => state.user?.id)
  const proId = useAppSelector(state => state.prop?.id)

  const verifyUser = useCallback(async () => {
    try {
      await dispatch(verifyUserTokenThunk())
    } catch (error: any) {
      try {
        await dispatch(verifyPropTokenThunk())
      } catch (error: any) {
        try {
          await dispatch(logoutUserThunk())
          await dispatch(logoutPropThunk())
        } catch (error: any) {
          console.log(error.message)
        }
      }
    }
  }, [dispatch])

  useEffect(() => {
    if (userId) {
      ;(async () => {
        try {
          await dispatch(verifyUserIdThunk(userId))
          dispatch(logoutProp())
        } catch (error: any) {
          try {
            await dispatch(logoutUserThunk())
            dispatch(logoutUser())
          } catch (error: any) {
            console.log(error.message)
          }
        }
      })()
    } else if (proId) {
      ;(async () => {
        try {
          await dispatch(verifyPropIdThunk(proId))
          dispatch(logoutUser())
        } catch (error: any) {
          try {
            await dispatch(logoutPropThunk())
            dispatch(logoutProp())
          } catch (error: any) {
            console.log(error.message)
          }
        }
      })()
    } else {
      verifyUser()
    }
  }, [])

  return <div>{children}</div>
}

export default ClientComponent
