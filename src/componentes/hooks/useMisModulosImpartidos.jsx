import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import getMisModulosImpartidos from "../../servicios/getMisModulosImpartidos";

function useMisModulosImpartidos() {
  const usuario = useContext(UserContext);

  const [lista, setLista] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (!usuario) {
      setLista([]);
      return;
    }

    setCargando(true);
    getMisModulosImpartidos(usuario).then((modulos) => {
      setLista(modulos);
      setCargando(false);
    });
  }, [usuario]);

  return { lista, cargando };
}

export default useMisModulosImpartidos;
