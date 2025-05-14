import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"
import Music from "./Components/UI/Music"


function App() {

  const buttons:Array<LinkInterface> = [
    {text:'Accueil',key:'home'},
    {text:"Qui je suis",key:'HowIAm'}
  ]



  return (
    <>
      <NavBar buttons={buttons}></NavBar>
      <Music src="./backgroungMusic.mp3"></Music>
    </>
  )
}

export default App
