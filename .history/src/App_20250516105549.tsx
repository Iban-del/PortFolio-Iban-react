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
console.log(playSound)
    if(playSound){
      audio.pause()
      setPlaySound(false)
      console.log(playSound)
    }else{
      audio.play()
      setPlaySound(true)
      console.log(playSound)
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
