import FavoritosProvider from "contexts/Favoritos";
import Favoritos from "pages/Favoritos/Favoritos";
import Inicio from "pages/Inicio/Inicio";
import NaoEncontrada from "pages/NaoEncontrada/NaoEncontrada";
import PaginaBase from "pages/PaginaBase/PaginaBase";
import Player from "pages/Player/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<PaginaBase />}>
                            <Route index element={<Inicio />}></Route>
                            <Route path="favoritos" element={<Favoritos />}></Route>
                            <Route path=":id" element={<Player />} />
                            <Route path="*" element={<NaoEncontrada />}></Route>
                        </Route>
                    </Routes>
                </FavoritosProvider>
        </BrowserRouter>
    )
}