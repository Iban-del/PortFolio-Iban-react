import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"

function App() {

  const buttons:Array<LinkInterface> = [
    {text:'test'},
    {text:"jdjd"}
  ]

  return (
    <>
      <NavBar buttons={buttons}></NavBar>
  
    </>
  )
}

export default App
