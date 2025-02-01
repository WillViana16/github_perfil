import { useEffect, useState } from "react";
//1- importação
//2 - código do componente
// mount , updated, onmount
import Perfil from "./components/Perfil";
import Formulario from './components/Formulario';
import ReposList from "./components/RepoList";


function App(){
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')
  
  return(
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
    
    {nomeUsuario.length > 4 && (
      <>
      <Perfil nomeUsuario={nomeUsuario}/>
      < ReposList nomeUsuario={nomeUsuario}/>
      </>
    )}

    { /*{formularioEstaVisivel &&(
      <Formulario />
    )}

    <button type="button">toggle form onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)}</button> */}
    </>
  )
}

  


export default App
