import NavBar from "./Components/UI/NavBar"
import Button from "./Components/UI/Button"
import Link, { type LinkInterface } from "./Components/UI/Link"

function App() {

  const buttons:Array<inkInterface> = [
    {}
  ]

  return (
    <>
      <NavBar></NavBar>
      <Button main={true} text="Continu"></Button>
      <Link text="Le test"></Link>
    </>
  )
}

export default App
