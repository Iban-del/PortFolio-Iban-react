import NavBar from "./Components/UI/NavBar"
import Button from "./Components/UI/Button"
import Link from "./Components/UI/Link"

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Button main={true} text="Continu"></Button>
      <Link text="Le test"></Link>
    </>
  )
}

export default App
