import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [imagem, setImagem] = useState('')
    const [relacao, setRelacao] = useState('')

    const relacoes = [
        'Familia',
        'Amigo',
        'Jogador',
        'Colega'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCadastro({nome, idade, imagem, relacao})
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar card do Amor</h2>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label='Nome' placeholder='Digite seu nome' />
                <CampoTexto valor={idade} aoAlterado={valor => setIdade(valor)} obrigatorio={true} label='Idade' placeholder='Digite sua idade' />
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label='Imagem' placeholder='Digite o endereço da imagem' />
                <ListaSuspensa valor={relacao} aoAlterado={valor => setRelacao(valor)} obrigatorio={true} label='Relação' itens={relacoes} />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario