import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"
import Background from "./Components/Three/Background"
import './index.css'
import { useState } from "react"
import { ApplicationRenderContext, BackgroundRenderContext, GenericRenderContext } from "./Core/RenderContext"


function App() {
  const buttons:Array<LinkInterface> = [
    {text:'Musique',key:'music'},
    {text:"Me contacter",key:'contact'},
  ]

  return (
    <>
      <GenericRenderContext>
        {/** fond d'écran */}
        <BackgroundRenderContext>
          <Background></Background>
        </BackgroundRenderContext>
        
        {/** application */}
        <ApplicationRenderContext>
          <NavBar buttons={buttons}></NavBar>
        </ApplicationRenderContext>
      </GenericRenderContext>
    </>
  )
}

export default App
