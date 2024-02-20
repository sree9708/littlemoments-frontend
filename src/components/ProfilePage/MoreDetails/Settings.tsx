import React, { useState } from "react"
import Switch from "react-switch"

const Settings = () => {
  const [notifications, setNotifications] = useState(false)
  const [newsletters, setNewsletters] = useState(false)

  const handleChangeNotifications = (nextnotifications: boolean) => {
    setNotifications(nextnotifications)
  }

  const handleChangeNewsletters = (nextnewsletters: boolean) => {
    setNewsletters(nextnewsletters)
  }

  return (
    <div className=" flex ">
      <div>
        <div className="flex gap-4 items-center">
          <div className="text-xl">Activate all notifications</div>
          <Switch
            onChange={handleChangeNotifications}
            checked={notifications}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
          />
        </div>
        <div className="flex mt-4 gap-4">
          <div className="text-xl">Newsletters</div>
          <Switch
            onChange={handleChangeNewsletters}
            checked={newsletters}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
          />
        </div>
      </div>
    </div>
  )
}

export default Settings
