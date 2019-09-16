import React, {useState} from 'react';
import "./style.less"

const Index = props => {
  const {left, right, onChange, checked, ...attr} = props
  const [isOn, turnSwitch] = useState(checked)
  const change = e => {
    turnSwitch(e.target.value)
    onChange(e.target.value)
  }

  return (
      <div className={`switch switch--horizontal ${attr.className}`}>
        <input id="on" type="radio" name="switch" value={left} onChange={change} checked={isOn === left}/>
        <label htmlFor="on">{left}</label>
        <input id="off" type="radio" name="switch" value={right} onChange={change} checked={isOn === right}/>
        <label htmlFor="off">{right}</label>
        <span className="toggle-outside">
          <span className="toggle-inside"></span>
        </span>
      </div>
  )

}

export default Index