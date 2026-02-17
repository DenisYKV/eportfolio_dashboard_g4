import "./Cabecera.css"

function Cabecera(props) {
    return (
        <header className="cabecera col-12 ">
             <p>Eportfolio de Denis</p>
            <h1>HEADER</h1>
            <p>usuario conectado: {props.usuario}</p>
        </header>
    )
}
export default Cabecera