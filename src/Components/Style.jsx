import styled from "styled-components"

export const Nav = styled.nav`
    background-color: black;
`

export const Ul = styled.ul`
    margin: 1rem;
    width: 30%;
    display: flex;
    margin-left: 65vw;
    justify-content: space-around;
    align-items:center;
    height: 10vh;
    list-style: none;
    text-transform: uppercase;
    //tag de link
    a{
        text-decoration: none;
        font-size: 1rem;
        color: white;
    }
`

export const SectionInicio = styled.section`
    height:80vh; 
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 3rem;
    background-color: black;

img{
    height: 60vh;
    
}

`

export const BoxInicio = styled.div`

img{
    height: 45vh;
    border-radius: 10%;

}
`

//Estilização Sobre

export const MainSobre = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const SectionDoSobre = styled.div`

h1{
    display: flex;
    justify-content: center;    
}   
`

export const Div = styled.div`
    display: flex;
    flex-direction: center;
    align-items: center;
    text-decoration: none;
    font-size: 1rem;

img{
    margin: 2rem;
    border-radius: 60%;
}

h2{
    margin-bottom: 1rem;
    padding: 10px;
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
    background-repeat: no-repeat;
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