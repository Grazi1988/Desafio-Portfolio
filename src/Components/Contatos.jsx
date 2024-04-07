import React from "react"
import Email from "./imgPort/mail.png"
import Instagram from "./imgPort/insta.png"
import Linkedin from "./imgPort/linkedin.png"
import Github from "./imgPort/git.png"

import * as S from "./Style"


function Contatos() {
    return (

        <S.Container>
            <S.SectionDoCont>
                <h2>Entre em contato</h2>
                <p>Para que possamos conversar</p>

                <S.DivCont>
                    <a href="grazi_510@hotmail.com">
                        <img src={Email} alt="logo do email" />
                    </a>

                    <a href="https://www.instagram.com/grazi.sf.100?igsh=cm9vd21sczJodmUz">
                        <img src={Instagram} alt="logo do instagram" />
                    </a>

                    <a href="https://www.linkedin.com/in/graziele-gon%C3%A7alves-1988bb201">
                        <img src={Linkedin} alt="logo do linkedin" />
                    </a>

                    <a href="https://github.com/Grazi1988">
                        <img src={Github} alt="logo do github" />
                    </a>

                </S.DivCont>

            </S.SectionDoCont>


        </S.Container>


    )
}
export default Contatos