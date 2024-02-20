"use client"

import PropIdDetails from "@/components/Admin/Prop/[id]/PropIdDetails"
import PropIdHeading from "@/components/Admin/Prop/[id]/PropIdHeading"
import PropIdMoreDetails from "@/components/Admin/Prop/[id]/PropIdMoreDetails"
import { errorMessage } from "@/hooks/useNotifications"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getPlaceByIdWithDetailsThunk } from "@/services/Redux/reducers/placeSlice"
import { AccountStatus } from "@/services/Utilities/Enum/account.status.enum"
import { useParams } from "next/navigation"
import { useRouter } from "next/router"
import React, { useEffect } from "react"

const PropIdContent = () => {

  const router = useRouter()
  const id: string = router.query.id as string

  const dispatch = useAppDispatch()
  useEffect(() => {
    ;(async () => {
      try {
        dispatch(getPlaceByIdWithDetailsThunk(id))
      } catch (error: any) {
        errorMessage(error.message)
      }
    })()
  }, [])

  const propDetails = useAppSelector(state => state.place.placeDetails)

  if (!id) {
    // If id is not available yet, return loading state or handle as necessary
    return <div>Loading...</div>;
  }

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

export async function generateStaticParams() {
  // Fetch IDs from the backend or define a static list of IDs
  const ids = ['id1', 'id2', 'id3']; // Replace with your actual list of IDs or logic to fetch IDs
  
  // Return an array of objects with `params` key
  return ids.map((id) => ({
    params: { id },
  }));
}

export default PropIdContent
