import React from "react"
import Home from "./Home.jsx"
import Sobre from "./Sobre.jsx"
import Projetos from "./Projetos.jsx"
import Contatos from "./Contatos.jsx"

import * as S from "./Style.jsx"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function Header() {
    return (
        <BrowserRouter>
            <S.Nav>
                <S.Ul>
                    <li><Link to="/Home">Home </Link></li>
                    <li><Link to="/Sobre">Sobre</Link></li>
                    <li><Link to="/Projetos">Projetos</Link></li>
                    <li><Link to="/Contatos">Contatos</Link></li>
                    
                </S.Ul>
            </S.Nav>

            <Routes>
                <Route path="Home" element={<Home/>}/>
                <Route path="Sobre" element={<Sobre/>}/>
                <Route path="Projetos" element={<Projetos/>}/>
                <Route path="Contatos" element={<Contatos/>}/>
            

            </Routes>

        </BrowserRouter>
    )
}
export default Header