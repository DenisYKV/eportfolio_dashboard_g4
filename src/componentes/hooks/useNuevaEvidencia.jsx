import { useState } from "react";
import newEvidencia from "../../servicios/newEvidencia";

function useNuevaEvidencia() {
  const [cargando, setCargando] = useState(false);

  function insertarEvidencia(evidencia) {
    setCargando(true);
    return newEvidencia(evidencia).then((resp) => {
      setCargando(false);
      return resp;
    });
  }

  return { insertarEvidencia, cargando };
}

export default useNuevaEvidencia;
