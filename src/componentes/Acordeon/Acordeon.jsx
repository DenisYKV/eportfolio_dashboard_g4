import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import useRoles from '../hooks/useRoles';
import useMisModulosImpartidos from '../hooks/useMisModulosImpartidos';
import useMisModulosMatriculados from '../hooks/useMisModulosMatriculados';
import opcionesMenu from '../../mocks/mock-administrador';
import { Link } from 'react-router-dom';



function Acordeon() {

  const { buscando, lista } = useRoles()
  const { buscando: buscandoDocente, lista: listaDocente } = useMisModulosImpartidos()
  const { buscando: buscandoEstudiante, lista: listaEstudiante } = useMisModulosMatriculados()


  function generaAcordeon(rol, index) {
    return (
      <Accordion key={index = rol}>
        <AccordionSummary
          expandIcon={"^"}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">{rol}</Typography>

        </AccordionSummary>

        {generarContenidoAcordeon(rol)}

      </Accordion>
    )
  }

  function generarContenidoAcordeon(rol) {

    if (rol == "administrador") {
      return (opcionesMenu.administrador.map(generarOpcionesAdministrador))
    }
    if (rol == "docente") {
      return (listaDocente.map(generarOpcionesDocente))
    }
    if (rol == "estudiante") {
      return (listaEstudiante.map(generarOpcionesEstudiante))
    }
  }

  function generarOpcionesDocente(modulo) {
    return (<AccordionDetails key={modulo.id}>
      <Link to={"/funcionalidaddocente/" + modulo.id} >{modulo.nombre}</Link>
    </AccordionDetails>)
  }

  function generarOpcionesEstudiante(modulo) {
    return (<AccordionDetails key={modulo.id}>
       <Link to={"/funcionalidadestuiante/" + modulo.id} >{modulo.nombre}</Link>
    </AccordionDetails>)
  }

  function generarOpcionesAdministrador(opcion) {
    return (<AccordionDetails key={opcion.nombre}>
       {opcion.nombre}
    </AccordionDetails>

    )
  }

  return (
    <>
      {lista.map(generaAcordeon)}
    </>
  )
}
export default Acordeon