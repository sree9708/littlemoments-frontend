"use client"

import TooltipComponent from "@/components/Tooltip/TooltipComponent"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { FaHome, FaUser } from "react-icons/fa"

type RegistrationNavbarProps = {
  props: boolean
}

const RegistrationNavbar = ({ props }: RegistrationNavbarProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(props)
  const { push } = useRouter()

  const handleLogin = () => {
    setIsLogin(prevIsLogin => !prevIsLogin)
    console.log(isLogin)
    if (!isLogin) {
      push("/login/props")
    } else {
      push("/login")
    }
  }

  return (
    <>
      <TooltipComponent />
      <div id="home-tooltip" className="absolute top-0 left-2 text-2xl cursor-pointer">
        <Link href="/">
          <FaHome />
        </Link>
      </div>
      <div
        id={isLogin ? "user-tooltip" : "props-tooltip"}
        className="absolute top-0 right-2 text-xl cursor-pointer"
      >
        <div onClick={handleLogin}>
          <FaUser />
        </div>
      </div>
    </>
  )
}

export default RegistrationNavbar
