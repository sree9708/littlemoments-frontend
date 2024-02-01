import React from "react"

const CategoryContent = () => {
  return (
    <div className="p-3">
      <div className="h-40 bg-theme-1 p-3 rounded-md drop-shadow-lg">
        <div className=" relative w-full h-full border border-secondary rounded-md p-3">
          {/* <div className=""> */}
            <div className="absolute -top-4 right-4 text-xs w-fit p-2 border border-primary bg-secondary rounded-md font-semibold text-theme-1">
              Add Super Category
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default CategoryContent
