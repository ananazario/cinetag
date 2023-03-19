import Cabecalho from "components/Cabecalho/Cabecalho";
import Container from "components/Container/Container";
import Rodape from "components/Rodape/Rodape"
import FavoritosProvider from "contexts/Favoritos";
import Favoritos from "pages/Favoritos/Favoritos";
import Inicio from "pages/Inicio/Inicio";
import Player from "pages/Player/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="/:id" element={<Player />} />
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}