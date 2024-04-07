import React from "react"

import Header from "./Components/Header"
import Footer from "./Components/Footer"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Merienda", cursive;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
    </>
  )
}

export default App