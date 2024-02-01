"use client"

import React, { useContext } from "react"
import { FaUsers } from "react-icons/fa6"
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi"
import { TbLogout } from "react-icons/tb"
import { BiSolidCategoryAlt, BiSolidCity } from "react-icons/bi"
import { SidebarExtened, SidebarExtenedProps } from "@/services/Context/SidebarExtenedContext"

const AdminSideBar = () => {
  const { extended, setExtended } = useContext(SidebarExtened) as SidebarExtenedProps

  return (
    <aside className="h-screen">
      <nav className="relative h-full w-fit flex flex-col border-r border-primary shadow-sm">
        <div className=" p-4 px-6 flex w-fit items-center">
          <div
            className={`font-title text-4xl overflow-hidden text-theme-1 transition-all ${extended ? "w-full" : "w-0"}`}
          >
            LITTLEMOMENTS
          </div>
          {!extended ? (
            <div className="text-2xl cursor-pointer transition-all" onClick={() => setExtended(!extended)}>
              <FiArrowRightCircle strokeWidth={2} className="bg-background" />
            </div>
          ) : (
            <div
              className="absolute -right-3 text-2xl transition-all cursor-pointer"
              onClick={() => setExtended(!extended)}
            >
              <FiArrowLeftCircle strokeWidth={2} className="bg-background" />
            </div>
          )}
        </div>
        <div className=" flex-1 px-3">
          <div
            className={`relative group py-2 px-3 my-2 rounded-md flex gap-2 items-center transition-all font-semibold drop-shadow-sm cursor-pointer
            ${extended ? "bg-theme-1 text-secondary " : "bg-background text-theme-1"}
          `}
          >
            <div>
              <FaUsers />
            </div>
            <div className={`overflow-hidden ${extended ? "w-full" : "w-0"}`}>Props</div>
            {!extended && (
              <div
                className={`
                absolute left-full rounded-md px-2 py-1 ml-6
                bg-theme-4 text-theme-1 text-sm
                invisible opacity-20 -translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
              >
                Props
              </div>
            )}
          </div>
          <div
            className={`relative group py-2 px-3 my-2 rounded-md flex gap-2 items-center transition-all font-semibold drop-shadow-sm cursor-pointer
            ${extended ? "bg-theme-1 text-secondary " : "bg-background text-theme-1"}
          `}
          >
            <div>
              <BiSolidCategoryAlt />
            </div>
            <div className={`overflow-hidden ${extended ? "w-full" : "w-0"}`}>Category</div>
            {!extended && (
              <div
                className={`
                absolute left-full rounded-md px-2 py-1 ml-6
                bg-theme-4 text-theme-1 text-sm
                invisible opacity-20 -translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
              >
                Category
              </div>
            )}
          </div>
          <div
            className={`relative group py-2 px-3 my-2 rounded-md flex gap-2 items-center transition-all font-semibold drop-shadow-sm cursor-pointer
            ${extended ? "bg-theme-1 text-secondary " : "bg-background text-theme-1"}
          `}
          >
            <div>
              <BiSolidCity />
            </div>
            <div className={`overflow-hidden ${extended ? "w-full" : "w-0"}`}>City</div>
            {!extended && (
              <div
                className={`
                absolute left-full rounded-md px-2 py-1 ml-6
                bg-theme-4 text-theme-1 text-sm
                invisible opacity-20 -translate-x-3 transition-all
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
              >
                City
              </div>
            )}
          </div>
        </div>
        <div className="border-t flex gap-2 items-center justify-center font-semibold p-3 cursor-pointer">
          <div className={`overflow-hidden ${extended ? "w-fit" : "w-0"}`}>Logout</div>
          <div>
            <TbLogout strokeWidth={3} />
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default AdminSideBar
