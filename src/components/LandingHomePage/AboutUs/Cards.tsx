import React from "react"
import plane from "../../../../public/airplane.png"
import webpage from "../../../../public/webpage.png"
import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6"

const Cards = () => {
  return (
    <div>
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-5 rounded-md p-12 hover:scale-95 transition-transform duration-300 border border-primary bg-theme-1 drop-shadow-[10px_10px_0_rgba(0,0,0,1)]">
          <Image src={plane} alt="airplane" width={100} height={100} />
          <div className="font-title text-5xl overflow-clip break-words">
            MAKE YOUR EVENT JOURNEY SEAMLEDD
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 rounded-md p-12 hover:scale-95 transition-transform duration-300  border border-primary bg-theme-2 drop-shadow-[10px_10px_0_rgba(0,0,0,1)]">
          <Image src={webpage} alt="webpage" width={100} height={100} />
          <div className="flex-none xl:flex gap-2">
            <div className="font-title text-5xl overflow-clip break-words">
              PROVIDE A COMPREHENSIVE PLATFORM
            </div>
            <div>
              <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ratione!</div>
              <div className="flex justify-end">
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-wrap justify-center items-center rounded-md p-12 hover:scale-95 transition-transform duration-300  border border-primary bg-theme-3 drop-shadow-[10px_10px_0_rgba(0,0,0,1)]">
          <div>
            <div className="flex justify-center">
              <Image src={webpage} alt="webpage" width={100} height={100} />
            </div>
            <div className="flex justify-center font-title text-5xl text-center overflow-clip break-words">
              DIVERSE
            </div>
          </div>
          <div className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ratione!
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-wrap justify-center items-center rounded-md p-12  hover:scale-95 transition-transform duration-300 border border-primary bg-theme-4 drop-shadow-[10px_10px_0_rgba(0,0,0,1)]">
          <div>
            <div className="flex justify-center">
              <Image src={webpage} alt="webpage" width={100} height={100} />
            </div>
            <div className="flex justify-center font-title text-5xl text-center overflow-clip break-words">
              USER-FRIENDLY
            </div>
          </div>
          <div className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ratione!
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-wrap justify-center items-center rounded-md p-12 hover:scale-95 transition-transform duration-300  border border-primary bg-theme-1 drop-shadow-[10px_10px_0_rgba(0,0,0,1)]">
          <div>
            <div className="flex justify-center">
              <Image src={webpage} alt="webpage" width={100} height={100} />
            </div>
            <div className="flex justify-center font-title text-5xl text-center">COMMUNITY</div>
          </div>
          <div className="text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ratione!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
