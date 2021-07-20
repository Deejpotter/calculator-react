import React from "react"

function Button(props) {
  return (
      <button className='button' onClick={props.function}>{props.symbol}</button>
  )
}

export default Button