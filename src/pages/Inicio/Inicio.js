import Banner from "components/Banner/Banner";
import Card from "components/Card/Card";
import Titulo from "components/Titulo/Titulo";
import styles from './Inicio.module.css'
import { useEffect, useState } from "react";

export default function Inicio() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/ananazario/cinetag/videos')
        .then((data) => data.json())
        .then((api) => setVideos(api))
    }, [])

    return (
        <>
            <Banner imagem="home" />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container}>
                {videos.map((video) => (
                    <Card {...video} key={video.id} />
                ))}
            </section>
        </>
    )
}