import Banner from 'components/Banner/Banner';
import styles from './Player.module.css';
import Titulo from 'components/Titulo/Titulo';
import { useParams } from 'react-router-dom';
import videos from '../../json/db.json'

export default function Player() {

    const parametros = useParams();
    const video = videos.find((video) => {
        return video.id === Number(parametros.id)
    })

    return (
        <>
            <Banner imagem="player" />
            <Titulo>
                <h1>Player</h1>
            </Titulo>
        </>
    )
}