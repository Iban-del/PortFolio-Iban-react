import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"

function App() {

  const buttons:Array<LinkInterface> = [
    {text:'Accueil'},
    {text:"Qui je suis"}
  ]

  return (
    <>
      <NavBar buttons={buttons}></NavBar>
      <audio id="backgroundAudio" src="./backgroungMusic.mp3"></audio>
    </>
  )
}

export default App
