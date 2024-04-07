import React from "react"
import Avatar from "./imgPort/eu.png"


import * as S from "./Style"

function Home() {
    return (

        <S.SectionInicio>
            <div>
                <p>Olá! Sou a Graziele</p>
                <p>Bem vindo ao meu portfólio</p>
                
                <button>
                    Saiba mais sobre mim>>>
                </button>
            </div>

            <S.BoxInicio>
                <img src={Avatar} alt="Foto avatar" />
            </S.BoxInicio>


        </S.SectionInicio>
    )
}
export default Home