import { useFavoritoContext } from 'contexts/Favoritos';
import styles from './Card.module.css';
import favoritar from './favoritar.png';
import desfavoritar from './desfavoritar.png';
import { Link } from 'react-router-dom';

export default function Card ({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    
    const eFavorito = favorito.some((fav) => fav.id === id);
    const icone = !eFavorito ? favoritar : desfavoritar;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img 
                    src={capa} 
                    alt={titulo} 
                    className={styles.capa} 
                />
                <h2>{titulo}</h2>
            </Link>
            <img 
                src={icone} 
                alt="Favoritar filme" 
                className={styles.favoritar} 
                onClick={() => {
                    adicionarFavorito({ id, titulo, capa })
                }}
            />
        </div>
    )
}