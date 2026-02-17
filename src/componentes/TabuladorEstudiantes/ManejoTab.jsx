import { useState } from "react"
import Tabular from "./Tabular"
import NuevaEvidencia from "../nuevaevidencia/NuevaEvidencia"
import ProgresoCompletoAlumno from "../paginas/paginasEstudiantes/ProgresoCompletoAlumno "
import RevisionesPendientes from "../paginas/paginasEstudiantes/RevisionesPendientes"

function ManejoTab(){
 const [opcionSeleccionada,setOpcionSeleccionada]=useState(0)
    //const lista=[{id:0,nombre:"MI PROGRESO COMPLETO"},{id:1,nombre:"SUBIR NUEVA EVIDENCIA"},{id:2,nombre:"MIS REVISIONES PENDIENTES"}]

    const [lista, setLista] = useState([{id:0,nombre:"MI PROGRESO COMPLETO"},{id:1,nombre:"SUBIR NUEVA EVIDENCIA"},{id:2,nombre:"MIS REVISIONES PENDIENTES"}])

  function manejarSeleccion(opcion){
    console.log("padre",opcion)
    setOpcionSeleccionada(opcion)
  }
  function renderizarComponentes() {
    switch(opcionSeleccionada){
      case 0 : return <ProgresoCompletoAlumno></ProgresoCompletoAlumno>
      case 1 : return <NuevaEvidencia></NuevaEvidencia>
      case 2 : return <RevisionesPendientes></RevisionesPendientes>
      default: return (<></>)
    }
  }


    return (
        <>
            <Tabular lista={lista}
                opcionInicial={0}
                manejarSeleccion={manejarSeleccion}></Tabular>
            {renderizarComponentes()}
        </>
    )

}
export default ManejoTab