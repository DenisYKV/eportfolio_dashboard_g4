import { useState } from "react";
import NuevaEvidenciaForm from "./NuevaEvidenciaForm";
import SelectorTareaRA from "./SelectorTareaRA";
import tareasRA from "../../mocks/mock-tareasRA";

function NuevaEvidencia() {
  const [tarea, setTarea] = useState(null);
  const [listaTareas, setListaTareas] = useState(tareasRA);
  const [evidencia, setEvidencia] = useState(null); 

  function seleccionarTarea(tareaSeleccionada) {
    setTarea(tareaSeleccionada);
  }

  function manejarFormulario(evidenciaRecibida) {
    setEvidencia(evidenciaRecibida); 
    console.log("Evidencia recibida en el padre:", evidenciaRecibida);
  }

  return (
    <>
      <SelectorTareaRA onSelect={seleccionarTarea} />
      <hr></hr>
      <NuevaEvidenciaForm manejarFormulario={manejarFormulario} tarea={tarea} />

      <pre>{JSON.stringify(evidencia, null, 2)}</pre>
    </>
  );
}

export default NuevaEvidencia;
