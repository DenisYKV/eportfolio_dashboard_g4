import TokenContext from "../context/TokenContext"
import { useContext } from "react"
function Roles() {
    const token= useContext(TokenContext)
    return (
        <aside>
            <p>roles {token}</p>
        </aside>
    )

}
export default Roles