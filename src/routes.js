import Cabecalho from "components/Cabecalho/Cabecalho";
import Rodape from "components/Rodape/Rodape"
import Favoritos from "pages/Favoritos/Favoritos";
import Inicio from "pages/Inicio/Inicio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/favoritos" element={<Favoritos />}></Route>
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}