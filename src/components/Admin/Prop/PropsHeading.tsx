"use client"

import { errorMessage } from "@/hooks/useNotifications"
import { useAppDispatch, useAppSelector } from "@/hooks/useStore"
import { getPlaceByAdminThunk } from "@/services/Redux/reducers/placeSlice"
import { AccountStatus } from "@/services/Utilities/Enum/account.status.enum"
import React, { useEffect, useState } from "react"

const PropsHeading = () => {
  const dispatch = useAppDispatch()
  const [selectedAccountStatus, setSelectedAccountStatus] = useState<AccountStatus>(AccountStatus.ALL)

  useEffect(() => {
    ;(async () => {
      try {
        await dispatch(
          getPlaceByAdminThunk({
            accountStatus: selectedAccountStatus,
            skip: 0,
            limit: 20,
          }),
        )
      } catch (error: any) {
        errorMessage(error.message) 
        console.log(error.message)
      }
    })()
  }, [selectedAccountStatus])

  return (
    <div className="admin_heading p-3 rounded-md drop-shadow-lg">
      <div className="w-full h-full border border-secondary rounded-md p-3">
        <div className="my-12">
          <div className="w-full flex justify-center font-title text-secondary text-title-sm">Props</div>
          <ul className="flex flex-wrap justify-center gap-4 mt-8">
            <li
              className={`w-fit flex justify-center ${AccountStatus.ALL === selectedAccountStatus ? "bg-theme-3 text-secondary" : "bg-secondary text-theme-1"} font-semibold p-2 px-4 rounded-md cursor-pointer hover:scale-110 transition-transform duration-200 ease-in`}
              onClick={() => setSelectedAccountStatus(AccountStatus.ALL)}
            >
              <div>ALL</div>
            </li>
            <li
              className={`w-fit flex justify-center ${AccountStatus.ON_HOLD === selectedAccountStatus ? "bg-theme-3 text-secondary" : "bg-secondary text-theme-1"} font-semibold p-2 px-4 rounded-md cursor-pointer hover:scale-110 transition-transform duration-200 ease-in`}
              onClick={() => setSelectedAccountStatus(AccountStatus.ON_HOLD)}
            >
              <div>On Hold</div>
            </li>
            <li
              className={`w-fit flex justify-center transition-colors duration-200 ease-in-out ${AccountStatus.PENDING === selectedAccountStatus ? "bg-theme-3 text-secondary" : "bg-secondary text-theme-1"} font-semibold p-2 px-4 rounded-md cursor-pointer hover:scale-110 transition-transform duration-200 ease-in`}
              onClick={() => setSelectedAccountStatus(AccountStatus.PENDING)}
            >
              <div>PENDING</div>
            </li>
            <li
              className={`w-fit flex justify-center ${AccountStatus.ACTIVE === selectedAccountStatus ? "bg-theme-3 text-secondary" : "bg-secondary text-theme-1"} font-semibold p-2 px-4 rounded-md cursor-pointer hover:scale-110 transition-transform duration-200 ease-in`}
              onClick={() => setSelectedAccountStatus(AccountStatus.ACTIVE)}
            >
              <div>ACTIVE</div>
            </li>
            <li
              className={`w-fit flex justify-center ${AccountStatus.INACTIVE === selectedAccountStatus ? "bg-theme-3 text-secondary" : "bg-secondary text-theme-1"} font-semibold p-2 px-4 rounded-md cursor-pointer hover:scale-110 transition-transform duration-200 ease-in`}
              onClick={() => setSelectedAccountStatus(AccountStatus.INACTIVE)}
            >
              <div>INACTIVE</div>
            </li>
            <li
              className={`w-fit flex justify-center ${AccountStatus.BLOCKED === selectedAccountStatus ? "bg-theme-3 text-secondary" : "bg-secondary text-theme-1"} font-semibold p-2 px-4 rounded-md cursor-pointer hover:scale-110 transition-transform duration-200 ease-in`}
              onClick={() => setSelectedAccountStatus(AccountStatus.BLOCKED)}
            >
              <div>BLOCKED</div>
            </li>
            <li
              className={`w-fit flex justify-center ${AccountStatus.DISMISSED === selectedAccountStatus ? "bg-theme-3 text-secondary" : "bg-secondary text-theme-1"} font-semibold p-2 px-4 rounded-md cursor-pointer hover:scale-110 transition-transform duration-200 ease-in`}
              onClick={() => setSelectedAccountStatus(AccountStatus.DISMISSED)}
            >
              <div>DISMISSED</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PropsHeading
