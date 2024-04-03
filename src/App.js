import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Relacao from './componentes/Relacao';
import Rodape from './componentes/Rodape';

function App() {

  const relacoes = [
    {
      nome: 'Familia',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Amigo',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Jogador',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Colega',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5'
    },
  ]

  const [amores, setAmores] = useState([])

  const amorCadastrado = (amor) => {
    setAmores([...amores, amor])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastro={amorCadastrado} />
      {relacoes.map(relacao => <Relacao 
        key={relacao.nome} 
        nome={relacao.nome} 
        corPrimaria={relacao.corPrimaria} 
        corSecundaria={relacao.corSecundaria} 
        amores={amores.filter(amor => amor.relacao == relacao.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
