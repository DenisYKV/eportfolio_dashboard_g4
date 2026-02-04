import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
function Tabular(props) {
    const [opcionSeleccionada,setOpcionSeleccionada]=useState(props.opcionInicial);

    
    function handleChange(event,nuevaOpcion) {
        setOpcionSeleccionada(nuevaOpcion)
        props.manejarSeleccion(nuevaOpcion)
        
    }
    function pintarOpcion(opcion) {
        return(<Tab key={opcion.id} label={opcion.nombre}></Tab>)
    }


return(
    <>
      <Tabs value={opcionSeleccionada} onChange={handleChange} aria-label="basic tabs example">
          {props.lista.map(pintarOpcion)}
        </Tabs>
    </>
)
}
export default Tabular