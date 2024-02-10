"use client"

import { useAppSelector } from "@/hooks/useStore"
import { AccountStatus } from "@/services/Utilities/Enum/account.status.enum"
import Link from "next/link"
import React, { useEffect } from "react"

const PropTable = () => {
  const isLoading = useAppSelector(state => state.place?.isLoading)
  const places = useAppSelector(state => state.place?.adminPlaces)

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-secondary uppercase bg-theme-1 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Place Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              City
            </th>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              View More
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap " colSpan={6}>
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6H6c0 3.309 2.691 6 6 6z"
                    ></path>
                  </svg>
                  <span>Loading...</span>
                </div>
              </th>
            </tr>
          ) : places?.length > 0 ? (
            places?.map((place, index) => (
              <tr className="bg-white border-b " key={index}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {place.placeName || "N/A"}
                </th>
                <td className="px-6 py-4">{place.email || "Not add"}</td>
                <td className="px-6 py-4">{place.city || "Not add"}</td>
                <td className="px-6 py-4">{place.id || "id not found"}</td>
                <td className="px-6 py-4">
                  <Link
                    href={`/admin/props/${place.id}`}
                    className="font-medium text-blue-600 hover:underline"
                  >
                    View more
                  </Link>
                </td>
                <td className="px-6 py-4">
                  <div
                    className={`p-2 rounded-md w-fit font-semibold 
                  ${place.accountStatus === AccountStatus.ACTIVE && "bg-green-400 text-green-800"}
                  ${place.accountStatus === AccountStatus.BLOCKED && "bg-red-400 text-red-800"}
                  ${place.accountStatus === AccountStatus.INACTIVE && "bg-orange-400 text-orange-800"}
                  ${place.accountStatus === AccountStatus.PENDING && "bg-blue-400 text-blue-800"}
                  ${place.accountStatus === AccountStatus.DISMISSED && "bg-yellow-400 text-yellow-800"}
                  ${place.accountStatus === AccountStatus.ON_HOLD && "bg-violet-400 text-violet-800"}
                  `}
                  >
                    {place.accountStatus}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="bg-white border-b ">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap " colSpan={6}>
                No Data Found
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default PropTable
