import { useEffect, useState } from "react";
import getTareasPorRA from "../../servicios/getTareasPorRA";

function useTareasPorRA() {
  const [lista, setLista] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    setCargando(true);
    getTareasPorRA("RA1").then((tareas) => {
      setLista(tareas);
      setCargando(false);
    });
  }, []);

  return { lista, cargando };
}

export default useTareasPorRA;
