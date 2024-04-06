import React from "react"
import Avatar from "./imgPort/meuavatar.png"
import Pc from "./imgPort/pc.png"


import * as S from "./Style"

function Home () {
    return (

        <S.SectionInicio>
            <img src={Avatar} alt="Foto do Avatar" />

                <S.BoxInicio>
                    <img src={Pc} alt=" Foto pc"/>
                </S.BoxInicio>


        </S.SectionInicio>
    )
}
export default Home