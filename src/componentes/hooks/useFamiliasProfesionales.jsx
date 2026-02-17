import { useEffect, useState } from "react";
import getFamiliasProfesionales from "../../servicios/getFamiliasProfesionales";

function useFamiliasProfesionales() {
  const [lista, setLista] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    getFamiliasProfesionales().then((familias) => {
      setLista(familias);
      setCargando(false);
    });
  }, []);

  return { lista, cargando };
}

export default useFamiliasProfesionales;
