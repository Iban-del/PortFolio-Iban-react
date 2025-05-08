import Button from "./Components/UI/Button"
import type { linkParameters } from "./Components/UI/Link"
import NavBar from "./Components/UI/NavBar"



function App() {

  const buttons:Array<linkParameters> = [
    {
      text:"Accueil",
      href:"#",
    }
  ]

  return <>
    <NavBar></NavBar>
  </>
}

export default App
