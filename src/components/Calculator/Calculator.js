import React from "react"
import Keypad from "./Keypad"
import Screen from "./Screen"

function Calculator(props) {
    return (
        <div className='calculator'>
            <Screen />
            <Keypad />
        </div>
    )
}

export default Calculator