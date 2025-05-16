import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"
import Background from "./Components/Three/Background"
import './index.css'
import { useState } from "react"


function App() {


  const buttons:Array<LinkInterface> = [
    {text:'Musique',key:'music'},
    {text:"Me contacter",key:'contact'},
  ]



  return (
    <>
      <Background></Background>
      <NavBar buttons={buttons}></NavBar>

    </>
  )
}

export default App
