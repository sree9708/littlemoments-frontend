import React from "react"
import { Tooltip } from "react-tooltip"

const TooltipComponent = () => {
  return (
    <>
      <Tooltip className="z-10" anchorSelect=".add-tooltip" place="bottom">
        Add
      </Tooltip>
      <Tooltip className="z-10" anchorSelect=".remove-tooltip" place="bottom">
        Remove
      </Tooltip>
      <Tooltip className="z-10" anchorSelect="#user-tooltip" place="bottom">
        User Login
      </Tooltip>
      <Tooltip className="z-10" anchorSelect="#props-tooltip" place="bottom">
        Props Login
      </Tooltip>
      <Tooltip className="z-10" anchorSelect="#home-tooltip" place="bottom">
        Home
      </Tooltip>
    </>
  )
}

export default TooltipComponent
