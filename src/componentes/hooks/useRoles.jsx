import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import getRolesPorUsuario from "../../servicios/getRolesPorUsuario";

function useRoles() {
  const usuario = useContext(UserContext);

  const [lista, setLista] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    if (!usuario) {
      setLista([]);
      return;
    }

    setCargando(true);
    getRolesPorUsuario(usuario).then((roles) => {
      setLista(roles);
      setCargando(false);
    });
  }, [usuario]);

  return { lista, cargando };
}

export default useRoles;
