import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"
import Background from "./Components/Three/Background"
import './index.css'
import { ApplicationRenderContext, BackgroundRenderContext, GenericRenderContext } from "./Core/RenderContext"
//import ScrollPoints from "./Components/UI/ScrollPoints"
import ApplicationHook from "./hooks/ApplicationHook"
import { lazy, Suspense } from "react"
import ScrollPoints from "./Components/UI/ScrollPoints"



function App() {



  const buttons:Array<LinkInterface> = [
    {text:'Musique',key:'music',onClick:(e,r)=>{}},
    {text:"Me contacter",key:'contact'},
  ]

  return (
    <>
      <GenericRenderContext>
        {/** fond d'écran */}
        <BackgroundRenderContext>
          <div className='fixed w-[100%] h-[100%] z-[-1] top-0'>
            <Background></Background>
          </div>
        </BackgroundRenderContext>
        
        {/** application */}
        <ApplicationRenderContext>
          <Suspense>
            <NavBar buttons={buttons}></NavBar>
            <ScrollPoints></ScrollPoints>
          </Suspense>
        </ApplicationRenderContext>
      </GenericRenderContext>
    </>
  )
}

export default App
