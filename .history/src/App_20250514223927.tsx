import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"
import { useEffect } from "react"



function App() {

  const buttons:Array<LinkInterface> = [
    {text:'Accueil',key:'home'},
    {text:"Qui je suis",key:'HowIAm'}
  ]

  document.onscroll = ()=>{
    const audio = new Audio("/public/backgroungMusic.mp3")
    audio.play()
  }

  useEffect(()=>{
   
  })



  return (
    <>
      <NavBar buttons={buttons}></NavBar>

    </>
  )
}

export default App
