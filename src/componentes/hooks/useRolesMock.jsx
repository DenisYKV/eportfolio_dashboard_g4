import { useContext, useEffect, useState } from "react"
import roles from "../../mocks/mock-roles"
import UserContext from "../../context/UserContext"


function useRolesMock() {
    const usuario = useContext(UserContext)
    const[buscando,setBuscando]=useState(false)
    const[lista,setLista]=useState([])

    useEffect(()=>{
        setLista(roles[usuario]?.roles ?? [])
    }, [usuario])

    return{buscando,lista }

}
export default useRolesMock