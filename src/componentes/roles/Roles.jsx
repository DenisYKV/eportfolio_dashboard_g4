import TokenContext from "../../context/TokenContext"
import UserContext from "../../context/UserContext"
import { useContext } from "react"
import "./Roles.css"
function Roles() {
    const token= useContext(TokenContext)
    const usuario=useContext(UserContext)
    return (
        <aside className="roles col-3">
            <p>roles {token}</p>
            <br />
            <p>usuario contexto: {usuario}</p>
        </aside>
    )

}
export default Roles