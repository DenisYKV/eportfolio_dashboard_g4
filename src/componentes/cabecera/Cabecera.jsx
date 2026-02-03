import "./Cabecera.css"

function Cabecera(props) {
    return (
        <header className="cabecera col-12 ">
            <p>cabecera {props.usuario}</p>
        </header>
    )
}
export default Cabecera