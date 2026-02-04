import TokenContext from "../../context/TokenContext"
import UserContext from "../../context/UserContext"
import { useContext } from "react"
import "./Roles.css"
import Acordeon from "../Acordeon/Acordeon"
function Roles() {
    const token= useContext(TokenContext)
    const usuario=useContext(UserContext)
    return (
        <aside className="roles col-3">
            <p>roles {token}</p>
            <br />
            <p>usuario contexto: {usuario}</p>
            <Acordeon></Acordeon>
        </aside>
    )

}
export default Roles