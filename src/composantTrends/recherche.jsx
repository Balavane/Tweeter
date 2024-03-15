import { useState } from "react"
import Rech from "../assets/imageSide/Search-Icon.png"

export default function Recherch() {
    const [ value, setValue ] = useState( "Search twitter" )
    const modifInp = (e) => {
        setValue( e.target.value)
    }

    return <div className="imgb" >
        <img src={ Rech } alt="" />
        <input type="text" value={ value } onChange={modifInp} className="rech"/>
        
    </div>
}