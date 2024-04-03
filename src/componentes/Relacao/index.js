import Amor from '../Amor'
import './Relacoes.css'

const Relacao = (props) => {

    const css = {backgroundColor: props.corSecundaria}

    return(

        props.amores.length > 0 && <section className='relacao' style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='amores'>
                {props.amores.map( amor => <Amor corDeFundo={props.corPrimaria} key={amor.nome} nome={amor.nome} idade={amor.idade} imagem={amor.imagem} />)}
            </div>
        </section>
    )
}

export default Relacao