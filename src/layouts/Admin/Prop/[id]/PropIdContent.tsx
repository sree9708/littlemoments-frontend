"use client"

import PropIdDetails from "@/components/Admin/Prop/[id]/PropIdDetails"
import PropIdHeading from "@/components/Admin/Prop/[id]/PropIdHeading"
import PropIdMoreDetails from "@/components/Admin/Prop/[id]/PropIdMoreDetails"
import { errorMessage } from "@/hooks/useNotifications"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getPlaceByIdWithDetailsThunk } from "@/services/Redux/reducers/placeSlice"
import { AccountStatus } from "@/services/Utilities/Enum/account.status.enum"
import { useRouter, useParams } from "next/navigation"
import React, { useEffect } from "react"

const PropIdContent = () => {
  const { id }: { id: string } = useParams()
  const { push } = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    ;(async () => {
      try {
        await dispatch(getPlaceByIdWithDetailsThunk(id))
      } catch (error: any) {
        push("/admin/dashboard")
        errorMessage(error.message)
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
      <PropIdMoreDetails />
    </div>
  )
}

// export async function generateStaticParams() {
//   // Fetch IDs from the backend or define a static list of IDs
//   const ids = ["id1", "id2", "id3"] // Replace with your actual list of IDs or logic to fetch IDs

//   // Return an array of objects with `params` key
//   return ids.map(id => ({
//     params: { id },
//   }))
// }

export default PropIdContent
