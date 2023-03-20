import Cabecalho from "components/Cabecalho/Cabecalho";
import Container from "components/Container/Container";
import FavoritosProvider from "contexts/Favoritos";
import Rodape from "components/Rodape/Rodape"
//import styles from "./PaginaBase.module.css"
import { Outlet } from "react-router-dom";

export default function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Rodape />
        </main>
    )
}