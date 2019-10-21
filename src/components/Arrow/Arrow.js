import React from "react"
import "./styles.less"

const Arrow = ({direction = "left", size, color, handler}) => {

  return <div className={`arrow ${direction === "right" ? "right" : "left"}`} onClick={handler} style={size ? {width: size, height: size} : {}}></div>
}

export default Arrow