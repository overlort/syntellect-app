import React from "react";
import './buttonsControl.css';
import { ButtonControl } from "../../types/buttonsControl.interface";


const ButtonsControl = (props: {
  buttons: ButtonControl[],
  value: string,
  onChange: (e: string) => void
}) => {
  return  (
    <div className="control">
      {props.buttons.map(el => el.position === 'L' && <button onClick={el.cb()}>{el.text}</button>)}
      <input  onChange={(e) => props.onChange(e.target.value)} value={props.value}/>
      {props.buttons.map(el => el.position === 'R' && <button onClick={el.cb()}>{el.text}</button>)}
    </div>
  )
}

export default ButtonsControl;