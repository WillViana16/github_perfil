import { useEffect, useState } from "react";
//1- importação
//2 - código do componente
// mount , updated, onmount
import Perfil from "./components/Perfil";
import Formulario from './components/Formulario';
import ReposList from "./components/RepoList";
import Pesquisa from "./components/Pesquisa";



function App(){
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  const aoPesquisar = (nome) => {
    setNomeUsuario(nome); // Atualiza o estado com o nome do usuário
  };

  return(
    <div>
    <Pesquisa aoPesquisar={aoPesquisar} />
    {nomeUsuario && 
    <> 
    <Perfil nomeUsuario={nomeUsuario} />
    <ReposList nomeUsuario={nomeUsuario} />
    </>
    }
</div>
);
}

export default App
