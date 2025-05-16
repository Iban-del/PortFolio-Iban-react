import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"
import Background from "./Components/Three/Background"
import './index.css'
import { useState } from "react"
import { BackgroundRenderContext } from "./RenderContext"


function App() {
  const buttons:Array<LinkInterface> = [
    {text:'Musique',key:'music'},
    {text:"Me contacter",key:'contact'},
  ]

  return (
    <>
      {/** fond d'écran */}
      <BackgroundRenderContext>
        <Background></Background>
      </BackgroundRenderContext>
      
      
      {/** application */}
      <NavBar buttons={buttons}></NavBar>

    </>
  )
}

export default App
