import { useState } from "react"
import Tabular from "./Tabular"
import NuevaEvidencia from "../nuevaevidencia/NuevaEvidencia"
import PlanificarCriterios from "../paginas/paginasDocentes/PlanificarCriterios"
import EvaluarEvidencias from "../paginas/paginasDocentes/EvaluarEvidencias"
import AsignarRevisiones from "../paginas/paginasDocentes/AsignarRevisiones"

function ManejoTab(){
 const [opcionSeleccionada,setOpcionSeleccionada]=useState(0)
    //const lista=[{id:0,nombre:"MI PROGRESO COMPLETO"},{id:1,nombre:"SUBIR NUEVA EVIDENCIA"},{id:2,nombre:"MIS REVISIONES PENDIENTES"}]

    const [lista, setLista] = useState([{id:0,nombre:"PLANIFICAR CRITERIOS"},{id:1,nombre:"EVALUAR EVIDENCIA"},{id:2,nombre:"ASIGNAR REVISIONES"}])

  function manejarSeleccion(opcion){
    console.log("padre",opcion)
    setOpcionSeleccionada(opcion)
  }
  function renderizarComponentes() {
    switch(opcionSeleccionada){
      case 0 : return <PlanificarCriterios></PlanificarCriterios>
      case 1 : return <EvaluarEvidencias></EvaluarEvidencias>
      case 2 : return <AsignarRevisiones></AsignarRevisiones>
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