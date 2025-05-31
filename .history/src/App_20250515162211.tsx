import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"
import Background from "./Components/Three/Background"
import './index.css'


function App() {

  const music = () =>{
    const audio = new Audio("/backgroungMusic.mp3")
    audio.loop = true;
    audio.play()
  }

  const buttons:Array<LinkInterface> = [
    {text:'Musique',key:'music',onClick:music},
    {text:"Qui je suis",key:'HowIAm'}
  ]



  return (
    <>
      <Background></Background>
      <NavBar buttons={buttons}></NavBar>

    </>
  )
}

export default App
