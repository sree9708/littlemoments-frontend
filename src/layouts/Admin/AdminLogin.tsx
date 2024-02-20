"use client"

import OtpInput from "@/components/Inputs/InputOtp"
import { useAppDispatch } from "@/hooks/useStore"
import { generateOtpAdminThunk, verifyOtpAdminThunk } from "@/services/Redux/reducers/adminSlice"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { errorMessage } from "@/hooks/useNotifications"

 const AdminLogin = () => {
  const [otp, setOtp] = useState("")
  const [isOtpInput, setIsOtpInput] = useState<boolean>(false)
  const [isError, setIsError] = useState<string | null>(null)

  const { push } = useRouter()
  const dispatch = useAppDispatch()

  const handleGenerateOtp = async () => {
    try {
      await dispatch(generateOtpAdminThunk())
      setIsOtpInput(true)
    } catch (err: any) {
      setIsError(err.message)
      errorMessage(err.message)
    }
  }

  const handleVerifyOtp = async () => {
    try {
      await dispatch(verifyOtpAdminThunk(otp))
      setIsOtpInput(false)
      push("/admin/dashboard")
    } catch (err: any) {
      setIsError(err.message)
      errorMessage(err.message)
    }
  }
  return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center w-full items-center sm:py-12">
        <div className="relative py-3 w-5/6 md:w-4/6 lg:w-2/6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div className="w-full flex justify-center">
                <h1 className="text-title-sm font-semibold font-title">Admin Login</h1>
              </div>
              <div className="divide-y divide-gray-200 flex justify-center">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 ">
                  {isOtpInput && (
                    <OtpInput
                      value={otp}
                      onChange={val => {
                        setOtp(val)
                      }}
                    />
                  )}
                  {isError && <p className="text-red-500 text-center">{isError}</p>}
                  {!isOtpInput ? (
                    <div className="relative">
                      <button
                        className="bg-blue-500 text-white rounded-md px-2 py-1"
                        onClick={handleGenerateOtp}
                      >
                        Generate OTP
                      </button>
                    </div>
                  ) : (
                    <div className="relative">
                      <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={handleVerifyOtp}>
                        Verify OTP
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default AdminLogin