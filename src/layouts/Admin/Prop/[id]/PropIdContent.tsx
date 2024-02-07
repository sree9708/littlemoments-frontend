"use client"

import PropIdDetails from "@/components/Admin/Prop/[id]/PropIdDetails"
import PropIdHeading from "@/components/Admin/Prop/[id]/PropIdHeading"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getPlaceByIdWithFullInformationThunk } from "@/services/Redux/reducers/placeSlice"
import { AccountStatus } from "@/services/Utilities/Enum/account.status.enum"
import { useParams } from "next/navigation"
import React, { useEffect } from "react"

const PropIdContent = () => {
  const { id }: { id: string } = useParams()
  const dispatch = useAppDispatch()
  useEffect(() => {
    ;(async () => {
      try {
        dispatch(getPlaceByIdWithFullInformationThunk(id))
      } catch (error: any) {
        console.log(error.message)
      }
    })()
  }, [])

  const propDetails = useAppSelector(state => state.place.placeDetails)
  return (
    <div className="p-3">
      <PropIdHeading
        heading={propDetails?.placeName || "No place name"}
        accountStatus={propDetails?.accountStatus || AccountStatus.PENDING}
      />
      <PropIdDetails />
    </div>
  )
}

export default PropIdContent
