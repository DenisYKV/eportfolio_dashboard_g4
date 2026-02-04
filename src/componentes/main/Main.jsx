import { useContext } from "react"
import "./Main.css"
import UserContext from "../../context/UserContext"
import NuevaEvidencia from "../nuevaevidencia/NuevaEvidencia"

function Main(props) {
    const usuario=useContext(UserContext)
    return (
        <main className="main col-9"> 
            <p>main {props.menu}</p>
            <br />
            <p>usuario contexto: {usuario}</p>
            
      <NuevaEvidencia></NuevaEvidencia>
        </main>
    )
}
export default Main