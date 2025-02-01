import { useState } from 'react';
import styles from './Pesquisa.module.css'

const Pesquisa= ({aoPesquisar}) => {
    const [nomeUsuario, setNomeUsuario] = useState('');

    const alteraNome= (evento) => {
        setNomeUsuario(evento.target.value);
    }

    const aoSubmeter = (evento) => {
        evento.preventDefault(); // Evita o recarregamento da página
        aoPesquisar(nomeUsuario); // Passa o nome do usuário para a função de pesquisa
    };

    return (
    <form className="campo" onSubmit={aoSubmeter}>
        <h2 className={styles.inputText}>Insira o nome do usuário do Github que deseja procurar:</h2>
        <input placeholder="Exemplo:Joao1234" 
        className={styles.inputUsuario} 
        type="text"
        value={nomeUsuario}
        onChange={alteraNome}
        />
        <button className={styles.inputBtn} type="submit"> Pesquisar </button>
    </form>
    )
}


export default Pesquisa