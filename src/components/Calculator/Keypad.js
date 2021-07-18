import React from "react"

import { ClearDisplay, Evaluate, Output } from "../Util/functions"
import Button from "./Button"

function Keypad(props) {
    return (
        <div className='keypad'>
            <Button symbol='1' function={() => Output(1)} />
            <Button symbol='2' function={() => Output(2)} />
            <Button symbol='3' function={() => Output(3)} />
            <Button symbol='4' function={() => Output(4)} />
            <Button symbol='5' function={() => Output(5)} />
            <Button symbol='6' function={() => Output(6)} />
            <Button symbol='7' function={() => Output(7)} />
            <Button symbol='8' function={() => Output(8)} />
            <Button symbol='9' function={() => Output(9)} />
            <Button symbol='0' function={() => Output(0)} />
            <Button symbol='+' function={() => Output("+")} />
            <Button symbol='-' function={() => Output("-")} />
            <Button symbol='*' function={() => Output("*")} />
            <Button symbol='/' function={() => Output("/")} />
            <Button symbol='c' function={() => ClearDisplay()} />
            <Button symbol='=' function={() => Evaluate()} />
        </div>
    )
}

export default Keypad