import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import tareasRA from '../../mocks/mock-tareasRA.js'
import useTareasPorRA from "../hooks/useTareasPorRA";

function SelectorTareaRA({onSelect} ) {
    const { lista: tareas, cargando } = useTareasPorRA();
    const [seleccionada, setTareaR] = React.useState('');

    const handleChange = (event) => {
        const idSeleccionado = event.target.value;
        setTareaR(idSeleccionado);

        const tareaSeleccionada = tareasRA.lista.find(
            (tarea) => tarea.id === idSeleccionado
        );

        onSelect(tareaSeleccionada);
    };


    function manejarSelector(list, index) {
        return (
            <MenuItem key={index = list.id} value={list.id}>{list.observaciones}</MenuItem>
        )
    }


    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Tarea</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={seleccionada}
                        label="SELECTOR"
                        onChange={handleChange}
                    >
                        {tareasRA.lista.map(manejarSelector)}
                        {/* {tareas.map()} */}
                    </Select>
                </FormControl>
            </Box>
        </>

    );
}
export default SelectorTareaRA