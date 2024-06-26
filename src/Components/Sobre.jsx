import React from "react"
import Perfil from "./imgPort/perfil.jpg"
import HTML from "./imgPort/html.png"
import CSS from "./imgPort/css.png"
import JS from "./imgPort/js.png"
import react from "./imgPort/react.png"

import * as S from "./Style"

function Sobre () {
    return (
        <S.MainSobre>
            <S.SectionDoSobre>
                <h2>Oi, um pouquinho sobre mim</h2>

                <S.Div>
                    <img src={Perfil} alt="Foto perfil" />
                    
                    <p>Me chamo Graziele Gonçalves.Tenho 35 anos, trabalhei 14 anos no ramo de material hospitalar.
                    Fiz vários cursos como estética, depilação, designer de sobrancelhas, manicure, etc. E não tinha me encontrado, atualmente estou estudando frond-end. 
                    Entrei no curso por curiosidade e acabei me apaixonando.
                    O VNW me deu essa oportunidades de conhecer essa área que nem imaginava como era.
                    Estou muito feliz.
                    </p>
                </S.Div>
            </S.SectionDoSobre>

            <S.DivSegundo>
                <h3>Techs</h3>
                <img src={HTML} alt="Ícone do HTML" />
                <img src={CSS} alt="Ícone do CSS" />
                <img src={JS} alt="Ícone do JS" />
                <img src={react} alt="Ícone do React" />
            </S.DivSegundo>
        </S.MainSobre>
    )
}

export default Sobre