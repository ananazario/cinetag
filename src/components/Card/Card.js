import { useFavoritoContext } from 'contexts/Favoritos';
import styles from './Card.module.css';
import favoritar from './favoritar.png';
import desfavoritar from './desfavoritar.png';

export default function Card ({ id, titulo, capa }) {
    const { favorito, adicionarFavorito } = useFavoritoContext();
    
    const eFavorito = favorito.some((fav) => fav.id === id);
    const icone = !eFavorito ? favoritar : desfavoritar;

    return (
        <div className={styles.container}>
            <img 
                src={capa} 
                alt={titulo} 
                className={styles.capa} 
            />
            <h2>{titulo}</h2>
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