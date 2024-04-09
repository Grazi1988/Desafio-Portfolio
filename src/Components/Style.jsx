import styled from "styled-components"

export const Nav = styled.nav`
    background-color: black;
`

export const Ul = styled.ul`
    height: 10vh;
    width: 30%;
    margin: 1rem;
    margin-left: 60vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;

a{
    font-size: 1.5rem;
    text-decoration: none;
    color: white;
}

a:hover{
    color: #cc00ff;
    font-size: 2rem;
}

@media(min-width: 320px) and (max-width: 768px){
    display: flex;
    flex-direction: column;
    height: 50vh;

    a{
        font-size: 2rem;
    }
}

`
// Estilização Home

export const SectionInicio = styled.section` 
    height: 75vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: black;
    color: white;

p {
    font-size: 2rem; 
    font-weight: bold;
    margin-bottom: 1rem;

}

button{
    width: 15vw;
    height: 50px;
    font-size: 0 1rem 0 1rem;
    font-weight: bold;
    border: 0;
    border-radius: 8px;
    cursor: pointer;

    color: white;
    background-color:#cc00ff;
}

`

export const BoxInicio = styled.div`

img {
    height: 70vh;
}
    `

//Estilização Sobre

export const MainSobre = styled.div`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SectionDoSobre = styled.div`
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

h2 {
    
    color:  #cc00ff; 
}   

`
export const Div = styled.div`
    display: flex;
    align-items: center;

 img{
    border-radius: 60%;
}

p {
    text-align: center; 
    max-width: 60vw; 
    font-size: 20px;
}

`
export const DivSegundo = styled.div`

img{
    margin: 1rem;
    height: 60px;
}

h3{
    display: flex;
    justify-content: center;
   
}
`
//Estilização Projetos
export const MainProj = styled.main`
    width: 100%;
    height:72vh;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-block: 1rem;
    background-color: black;

`
export const SectionProj = styled.section`
    width: 25vw;
    border: solid white 3px;
    border-radius: 40px;
    margin: 1rem;

img{
    display: none;
}
&:hover {
    img{
    display: initial;
}
}

h2{
    color: white;
    text-align: center;
}
`

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    

img{
    width: 10vw;
}

h2{
    color:  #cc00ff;
}

h3{
    color:  #cc00ff;
}


`

export const DivCard2 = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;

img{
    width: 10vw;

}

h2{
    color: violet;
}

h3{
    color: violet;
}

`

export const Card3 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

img{
    width: 10vw;
}

h3{
    color: violet;
}
    
`
export const Card4 = styled.div`
 display: flex;
    flex-direction: column;
    align-items: center;

img{
    width: 10vw;
}

h3{
    color: violet;
}
`
export const Card5 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

img{
    width: 10vw;
}

h3{
    color: violet;
}
`
export const Card6 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

img{
    width: 10vw;
    
    
}



h3{
    color: violet;
}
`


//Estilização Contatos
export const Container = styled.div`
    height: 75vh;
    background-color: black;
`

export const SectionDoCont = styled.section`
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

h2, p {
     color: white;
     font-size: 1.5rem;
}

`

export const DivCont = styled.div`
a {
    margin: 0 10px;
    transition: transform 0.3s ease;
}
`


//Estilização do Footer
export const SectionDoFooter = styled.footer`
    margin: 1rem 0 1rem 0;
    color: white;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
`