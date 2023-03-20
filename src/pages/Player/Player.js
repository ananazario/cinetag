import Banner from 'components/Banner/Banner';
import styles from './Player.module.css';
import Titulo from 'components/Titulo/Titulo';
import { useParams } from 'react-router-dom';
import NaoEncontrada from 'pages/NaoEncontrada/NaoEncontrada';
import { useEffect, useState } from 'react';

export default function Player() {

    const [video, setVideo] = useState([])

    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/ananazario/cinetag/videos?id=${parametros.id}`)
        .then((dados) => dados.json())
        .then((api) => setVideo(...api))
    }, [parametros.id])

    if (!video) {
        return <NaoEncontrada />
    }

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
            <section className={styles.container}>
                <iframe
                    width="560"
                    height="315"
                    src={video.link}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
                />
            </section>
        </>
    )
}