import React from "react"
import { Output } from "../Util/functions"



function Button(props) {
  return (
      <button className='button' onClick={props.function}>{props.symbol}</button>
  )
}

export default Button