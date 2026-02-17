import { useContext, useState } from "react"
import impartidos from "../../mocks/mock-impartidos"
import UserContext from "../../context/UserContext"
import { useEffect } from "react"

function useMisModulosImpartidosMock() {
    const usuario = useContext(UserContext)
    
        const[buscando,setBuscando]=useState(false)
        
    const[lista,setLista]=useState([])

    useEffect(()=>{
            setLista(impartidos[usuario]?.lista ?? [])
        }, [usuario])

    return{buscando,lista}
}
export default useMisModulosImpartidosMock