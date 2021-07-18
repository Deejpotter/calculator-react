import React from "react"
import { Output } from "../Util/functions"
import Button from "./Button"
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