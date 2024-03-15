
import { Link } from "react-router-dom"
import Prof from "../assets/imageSide/profil.png"



export default function Profil() {
    
    return <div className="home">
        <Link to ="profil"><img src={ Prof } alt="" /></Link>
        
    </div>
}