import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"
import { useEffect } from "react"



function App() {

  const music = () =>{
    const audio = new Audio("/public/backgroungMusic.mp3")
    audio.loop = true;
    audio.play()
  }

  const buttons:Array<LinkInterface> = [
    {text:'Accueil',key:'home',onClick:music},
    {text:"Qui je suis",key:'HowIAm'}
  ]



  return (
    <>
      <NavBar buttons={buttons}></NavBar>

    </>
  )
}

export default App
