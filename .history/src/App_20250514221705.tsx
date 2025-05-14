import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"
import { useEffect } from "react"

function App() {

  const buttons:Array<LinkInterface> = [
    {text:'Accueil'},
    {text:"Qui je suis"}
  ]

  useEffect(()=>{
    
  })

  return (
    <>
      <NavBar buttons={buttons}></NavBar>
      <audio id="backgroundAudio" src="./backgroungMusic.mp3" loop autoPlay></audio>
    </>
  )
}

export default App
