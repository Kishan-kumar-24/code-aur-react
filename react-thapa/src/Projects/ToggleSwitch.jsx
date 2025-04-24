import React, { useState } from "react"
import { IoIosSwitch } from "react-icons/io"
import { PiUserSwitchFill } from "react-icons/pi"
import "./ToggleSwitch.css"

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false)

  const handleToggleSwitch = () => {
    setIsOn(!isOn)
  }

  const checkIsOn = isOn ? "on" : "off"
  const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" }

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "#000" }}>
        Toggle Switch <IoIosSwitch style={{ color: "red" }} /> <PiUserSwitchFill />
      </h1>

      <div
        className="toggle-switch"
        style={toggleBGColor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </div>
  )
}

export default ToggleSwitch
