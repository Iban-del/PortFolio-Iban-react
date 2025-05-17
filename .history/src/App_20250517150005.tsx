import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"
import Background from "./Components/Three/Background"
import './index.css'
import { ApplicationRenderContext, BackgroundRenderContext, GenericRenderContext } from "./Core/RenderContext"
import ScrollPoints from "./Components/UI/ScrollPoints"
import { Suspense } from "react"
import Loader from "./Components/Pages/Loader"


function App() {
  const buttons:Array<LinkInterface> = [
    {text:'Musique',key:'music'},
    {text:"Me contacter",key:'contact'},
  ]

  return (
    <>
      <GenericRenderContext>
        {/** fond d'écran */}
        <BackgroundRenderContext>
          <Background></Background>
        </BackgroundRenderContext>
        
        {/** application */}
        <ApplicationRenderContext>
          <Suspense fallback={<Loader/>}>
            <NavBar buttons={buttons}></NavBar>
            <ScrollPoints numberELements={9}></ScrollPoints>
          </Suspense>
        </ApplicationRenderContext>
      </GenericRenderContext>
    </>
  )
}

export default App
