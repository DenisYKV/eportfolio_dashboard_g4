import { useForm } from "react-hook-form";
import UserContext from "../../context/UserContext";
import { useEffect, useContext } from "react"
import { Button, TextField } from "@mui/material";
import useNuevaEvidencia from "../hooks/useNuevaEvidencia";


function NuevaEvidenciaForm(props) {

    const usuario = useContext(UserContext)
    const { insertarEvidencia, cargando } = useNuevaEvidencia();


    const EVIDENCIA = {
        tarea_id: props.tarea?.id ?? null,
        estudiante_id: usuario,
        url: "url",
        descripcion: "descripcion",
        estado_validacion: "pendiente"
    }

    const EVIDENCIAINICIAL = {
        tarea_id: props.tarea?.id ?? null,
        estudiante_id: usuario,
        url: "",
        descripcion: "",
        estado_validacion: "pendiente"
    }
    const { register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors } } = useForm({ defaultValues: EVIDENCIAINICIAL })

    useEffect(function () {
        if (props.tarea && props.tarea.id != null) {
            setValue("tarea_id", props.tarea.id);
        } else {
            setValue("tarea_id", null);
        }

    }, [props.tarea, setValue]);
    const manejarFormulario = handleSubmit((evidencia) => {

        const nuevaEvidencia = {
            ...evidencia,
            estudiante_id: usuario,
            estado_validacion: "pendiente"
        };

        insertarEvidencia(nuevaEvidencia).then((creada) => {
            console.log("Evidencia creada:", creada);
        });

    });

    function validarURL(url) {
        console.log("validando URL");
        if (typeof props.validarURL !== "function") return true;
        return props.validarURL(url);
    }

    if (props.tarea !== null) {
        console.log("Tarea enviada al formulario:")
        console.log(props.tarea.id)
        console.log(props.tarea.observaciones)
    }

    return (
        <form id="formulario" onSubmit={manejarFormulario}>


            {/*<label htmlFor={EVIDENCIA.url}>url: </label>  
           <input id={EVIDENCIA.url} type="text"
                {...register(EVIDENCIA.url, {
                    required: { value: true, message: "La url es obligatoria" },
                    pattern: {
                        value: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i,
                        message: "El formato de la URL no es válido",
                    },
                    validate: validarURL,
                })}
            ></input> <br /><span>{errors.url?.message}</span> */}
            <br />
            <TextField
                label='URL'
                variant="outlined"
                fullWidth
                {...register(EVIDENCIA.url, {
                    required: { value: true, message: "La url es obligatoria" },
                    pattern: {
                        value: /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/i,
                        message: "El formato de la URL no es válido",
                    },
                    validate: validarURL,
                })} />
            <br />
            <br />

            {/*  <label htmlFor={EVIDENCIA.descripcion}>Observaciones: </label>
            <input id={EVIDENCIA.descripcion} type="textfield"
                {...register(EVIDENCIA.descripcion,
                    {
                        required: {
                            value: true,
                            message: "La descripcion es obligatoria"
                        }
                    }

                )}
            ></input> <br /><span>{errors.descripcion?.message}</span> */}<br />


            <TextField
                label='Descripción'
                variant="outlined"
                fullWidth
                multiline
                {...register(EVIDENCIA.descripcion,
                    {
                        required: {
                            value: true,
                            message: "La descripcion es obligatoria"
                        }
                    })} />
            <br />

            <Button type="submit" variant="contained">Añadir Evidencia</Button>
        </form>
    )
}
export default NuevaEvidenciaForm