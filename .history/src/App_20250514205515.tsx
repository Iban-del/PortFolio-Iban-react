import NavBar from "./Components/UI/NavBar"
import Button from "./Components/UI/Button"
import Link, { type LinkInterface } from "./Components/UI/Link"

function App() {

  const buttons:Array<LinkInterface> = [
    {text:'test'},
    {text:"jdjd"}
  ]

  return (
    <>
      <NavBar buttons={buttons}></NavBar>
      <Button main={false} text="Continu"></Button>
      <Link text="Le test"></Link>
    </>
  )
}

export default App
