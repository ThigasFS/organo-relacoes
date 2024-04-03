import './Amor.css'

const Amor = (props) => {
    return (
        <div className='amor'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.idade} anos</h5>
            </div>
        </div>
    )
}

export default Amor