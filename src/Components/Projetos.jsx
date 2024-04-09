import React from "react"
import Vnw from "./imgPort/vnw.png"
import Dog from "./imgPort/dog.png"
import Cartoon from "./imgPort/cartoon.png"
import Witcher from "./imgPort/witcher.png"
import Cruzeiro from "./imgPort/cruzeiro.png"
import Patrocinadores from "./imgPort/patrocinadores.png"

import * as S from "./Style"


function Projetos() {
    return (
        <S.MainProj>
            <S.SectionProj>
                <h2>ESTUDOS</h2>
                <S.Card>
                    <S.Div>
                        <h2>Desenvolvimento front-end</h2>
                        <h3>AGO/2023 - MAIO/2024</h3>
                        <img src={Vnw} alt="Logo do vnw" />
                    </S.Div>

                </S.Card>

            </S.SectionProj>

            <S.SectionProj>
                <h2>PROJETOS</h2>
            <S.Card>
            <S.DivCard2>
                <div>
                    <h2>Fantastika</h2>
                    <img src={Dog} alt="logo dog" />
                    <h3>Html, css, responsivo</h3>
                </div>

            </S.DivCard2>
        </S.Card>

            </S.SectionProj>

            <S.SectionProj>
                <h2>Cartoon</h2>
                <S.Card3>
                    <div>
                        <img src={Cartoon} alt="logo cartoon" />
                        <h3>React, map, styled-components, useState, useEffect, filter</h3>
                    </div>

                </S.Card3>

            </S.SectionProj>

            <S.SectionProj>
                <h2>The Witcher</h2>
                <S.Card4>
                    <div>
                        <img src={Witcher} alt="logo witcher" />
                        <h3>html, css, position</h3>
                    </div>

                </S.Card4>

            </S.SectionProj>

            <S.SectionProj>
                <h2>Cruzeiro</h2>
                <S.Card5>
                    <div>
                        <img src={Cruzeiro} alt="logo cruzeiro" />
                        <h3>Lógica - JS</h3>
                    </div>

                </S.Card5>

            </S.SectionProj>

            <S.SectionProj>
                <h2>Patrocinadores</h2>
                <S.Card6>
                    <div>
                        <img src={Patrocinadores} alt="logo patrocinio" />
                        <h3>DOM, useEffect, useState</h3>
                    </div>

                </S.Card6>

            </S.SectionProj>

        </S.MainProj>
    )
}
export default Projetos
