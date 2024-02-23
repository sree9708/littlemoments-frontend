import React from "react"
import { Link } from "react-scroll"

const Copyright: React.FC = () => {
  return (
    <div className="mt-24 mx-5 sm:mx-12 md:mx-20 lg:mx-36 opacity-50 pb-0 lg:pb-36 relative overflow-hidden">
      <div className="flex justify-between ">
        <div>All rights reserved by littlemoments.in</div>
        <Link to="hero" smooth={true}>
          <div>Back to top</div>
        </Link>
      </div>
      <div className="hidden 2xl:block ">
        <div className="absolute w-full md:text-4xl lg:text-title-footer text-center font-extrabold -bottom-10 flex flex-1 justify-center opacity-30">
          LITTLE MOMENTS
        </div>
      </div>
    </div>
  )
}

export default Copyright
