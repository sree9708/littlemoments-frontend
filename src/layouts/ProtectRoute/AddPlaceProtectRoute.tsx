import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { logoutProp, verifyPropIdThunk } from "@/services/Redux/reducers/propSlice"
import { logoutUser } from "@/services/Redux/reducers/userSlice"
import { useRouter } from "next/navigation"
import React from "react"

const AddPlaceProtectRoute = ({ children }: { children: React.ReactNode }) => {
  const { push } = useRouter()
  const dispatch = useAppDispatch()
  const proId = useAppSelector(state => state.prop?.id)

  if (proId) {
    ;(async () => {
      try {
        await dispatch(verifyPropIdThunk(proId))
        dispatch(logoutUser())
      } catch (error: any) {
        dispatch(logoutProp())
        push("/")
      }
    })()
  } else {
    push("/")
  }

  return <div>{children}</div>
}

export default AddPlaceProtectRoute
