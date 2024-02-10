"use client"

import ModalComponent from "@/components/Modal/ModalComponent"
import { useAppDispatch } from "@/hooks/useStore"
import {
  getPlaceByIdWithDetailsThunk,
  updateAccountStatusThunk,
} from "@/services/Redux/reducers/placeSlice"
import { AccountStatus } from "@/services/Utilities/Enum/account.status.enum"
import { useParams } from "next/navigation"
import React, { useEffect, useState } from "react"
import { TiEdit } from "react-icons/ti"
import Swal from "sweetalert2"

interface IPropIdHeading {
  heading: string
  accountStatus: AccountStatus
}
const PropIdHeading = ({ heading, accountStatus }: IPropIdHeading) => {
  const [isStatus, setIsState] = useState<AccountStatus>(accountStatus)

  const { id }: { id: string } = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    setIsState(accountStatus)
  }, [accountStatus])
  const [accountStatusModal, setAccountStatusModal] = useState(false)

  const handleModal = (isOpen: boolean) => {
    setAccountStatusModal(isOpen)
  }

  const onSubmit = async () => {
    console.log(isStatus)
    if (isStatus === accountStatus) {
      Swal.fire({ icon: "error", title: "No changes", text: "Please change the status" })
      return
    }
    try {
      await dispatch(updateAccountStatusThunk({ id: id, accountStatus: isStatus }))
      await dispatch(getPlaceByIdWithDetailsThunk(id))
    } catch (error: any) {
      console.log(error.message)
    }
    handleModal(false)
  }
  return (
    <div className="admin_heading p-3 rounded-md drop-shadow-lg">
      <div className="relative w-full h-full border border-secondary rounded-md p-3">
        <div className="w-full flex justify-end cursor-pointer">
          <div
            className={`absolute flex items-center gap-2 p-2 rounded-md w-fit font-semibold 
                  ${accountStatus === AccountStatus.ACTIVE && "bg-green-400 text-green-800"}
                  ${accountStatus === AccountStatus.BLOCKED && "bg-red-400 text-red-800"}
                  ${accountStatus === AccountStatus.INACTIVE && "bg-orange-400 text-orange-800"}
                  ${accountStatus === AccountStatus.PENDING && "bg-blue-400 text-blue-800"}
                  ${accountStatus === AccountStatus.DISMISSED && "bg-yellow-400 text-yellow-800"}
                  ${accountStatus === AccountStatus.ON_HOLD && "bg-violet-400 text-violet-800"}
                  `}
            onClick={() => setAccountStatusModal(true)}
          >
            {accountStatus}
            <div className="text-xl">
              <TiEdit />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center my-12 font-title text-secondary text-title-sm">
          {heading}
        </div>
      </div>
      {/* <div className="inset-0 fixed w-full bg-black z-40">
        
      </div> */}
      <ModalComponent
        isModalCloseAndOpen={accountStatusModal}
        handleModal={handleModal}
        title="Account Status"
      >
        <>
          <div className="p-2 border-2 rounded-md border-primary">{isStatus}</div>
          <div className="my-3 flex flex-wrap justify-center">
            <button
              onClick={() => {
                setIsState(AccountStatus.ACTIVE)
              }}
              className={`bg-green-400 text-green-800 p-2 rounded-md font-semibold m-2 ${isStatus === AccountStatus.ACTIVE ? "opacity-100" : "opacity-60"}`}
            >
              Active
            </button>
            <button
              onClick={() => {
                setIsState(AccountStatus.BLOCKED)
              }}
              className={`bg-red-400 text-red-800 p-2 rounded-md font-semibold m-2 ${isStatus === AccountStatus.BLOCKED ? "opacity-100" : "opacity-60"}`}
            >
              Blocked
            </button>
            <button
              onClick={() => {
                setIsState(AccountStatus.INACTIVE)
              }}
              className={`bg-orange-400 text-orange-800 p-2 rounded-md font-semibold m-2 ${isStatus === AccountStatus.INACTIVE ? "opacity-100" : "opacity-60"}`}
            >
              Inactive
            </button>
            <button
              onClick={() => {
                setIsState(AccountStatus.PENDING)
              }}
              className={`bg-blue-400 text-blue-800 p-2 rounded-md font-semibold m-2 ${isStatus === AccountStatus.PENDING ? "opacity-100" : "opacity-60"}`}
            >
              Pending
            </button>
            <button
              onClick={() => {
                setIsState(AccountStatus.DISMISSED)
              }}
              className={`bg-yellow-400 text-yellow-800 p-2 rounded-md font-semibold m-2 ${isStatus === AccountStatus.DISMISSED ? "opacity-100" : "opacity-60"}`}
            >
              Dismissed
            </button>
            <button
              onClick={() => {
                setIsState(AccountStatus.ON_HOLD)
              }}
              className={`bg-violet-400 text-violet-800 p-2 rounded-md font-semibold m-2 ${isStatus === AccountStatus.ON_HOLD ? "opacity-100" : "opacity-60"}`}
            >
              On Hold
            </button>
          </div>
        </>
        <button
          className="w-full bg-theme-3 mt-2 p-4 rounded-md border-2 border-primary text-2xl text-secondary font-bold"
          onClick={onSubmit}
        >
          Submit
        </button>
      </ModalComponent>
    </div>
  )
}

export default PropIdHeading
