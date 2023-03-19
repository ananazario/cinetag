import styles from './Card.module.css';
import favoritar from './favoritar.png';
//import desfavoritar from './desfavoritar.png';

export default function Card ({ id, titulo, capa }) {
    return (
        <div className={styles.container}>
            <img 
                src={capa} 
                alt={titulo} 
                className={styles.capa} 
            />
            <h2>{titulo}</h2>
            <img 
                src={favoritar} 
                alt="Favoritar filme" 
                className={styles.favoritar} 
            />
        </div>
    )
}