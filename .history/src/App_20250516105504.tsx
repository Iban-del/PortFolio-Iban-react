import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"
import Background from "./Components/Three/Background"
import './index.css'
import { useState } from "react"


function App() {

  const [playSound,setPlaySound] = useState<boolean>(false);

  const music = () =>{
    const audio = new Audio("/backgroungMusic.mp3")
    audio.loop = true;

    if(playSound){
      audio.pause()
      console.log(playSound)
      setPlaySound(false)
    }else{
      audio.play()
      setPlaySound(true)
    }
  }

  const buttons:Array<LinkInterface> = [
    {text:'Musique',key:'music',onClick:music},
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
