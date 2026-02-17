import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import getMisModulosMatriculados from "../../servicios/getMisModulosMatriculados";

function useMisModulosMatriculados() {
  const usuario = useContext(UserContext);

  const [lista, setLista] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (!usuario) {
      setLista([]);
      return;
    }

    setCargando(true);
    getMisModulosMatriculados(usuario).then((modulos) => {
      setLista(modulos);
      setCargando(false);
    });
  }, [usuario]);

  return { lista, cargando };
}

export default useMisModulosMatriculados;
