import './CampoTexto.css'

const CampoTexto = (props) => {

    function aoDigitar(evento) {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campotexto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto