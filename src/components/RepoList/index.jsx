import { useEffect, useState } from "react";

import styles from './ReposList.module.css';
import { use } from "react";

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [deuErro, setDeuError] = useState(false);

    useEffect(() => {
        setEstaCarregando(true);
        setDeuError(false);

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Erro na requisição:${res.status}`);
            }
            return res.json();
        })
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson);
            }, 3000);
        })
        .catch(e => {
            console.error("Erro ao buscar repositórios:", e);
                setDeuError(true); // Estado Erro
                setEstaCarregando(false); // Para o carregamento
        })
    }, [nomeUsuario]);

    return (
        <div className="container">

            {estaCarregando ?(
            <h1>Carregando...</h1>
        ) : deuErro ? (
            <h2>Erro ao carregar repositórios. Verifique o nome do usuário e tente novamente.</h2>
        ) : (
        <ul className={styles.list}>
            {repos.map(({ id, name, language, html_url}) => (
                <li className={styles.listItem} key={id}>
                    <div className={styles.itemName}>
                        <b>Nome:</b> 
                        {name}
                    </div>
                    <div className={styles.itemLanguage}>
                        <b>Linguagem:</b> 
                        {language}
                    </div>
                    <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                </li>
            ))}
        </ul>
        )}

        </div>
    )
}


export default ReposList