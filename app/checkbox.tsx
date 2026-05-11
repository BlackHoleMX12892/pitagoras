"use client"
import { config } from "./global"
import { handleShowSquaresCheckbox } from "./interactivemenu";

export default function Checkbox() {
    return(<input type="checkbox" name="" id="" onChange={(e) => {config.check = e.target.checked; handleShowSquaresCheckbox();}} defaultChecked={config.check} />)
}
