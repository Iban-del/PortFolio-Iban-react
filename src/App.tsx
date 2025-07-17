import NavBar, { type LinkInterface } from "./Components/UI/NavBar"

import Background from "./Components/Three/Background"
import './index.css'
import { ApplicationRenderContext, BackgroundRenderContext } from "./Core/RenderContext"
import { Suspense } from "react"
import ScrollPoints from "./Components/UI/ScrollPoints"
import Page from "./Components/Pages/Page"
import { useApplication } from "./context/ApplicationContext"
import ApplicationHook from "./hooks/ApplicationHook"



function App() {

  const {updateApplication,scrollValue,updateScroll} = ApplicationHook()
  const {view,helpView} = useApplication()


  const buttons:Array<LinkInterface> = [
    {text:"Informations",key:'info' , onClick:()=>updateApplication("view",!view)},
    {text:"Aide",key:'help' , onClick:()=>updateApplication("helpView",!helpView)},
  ]

  return (
    <>
      
        {/** fond d'écran */}
      
        <BackgroundRenderContext>
        <div className='fixed w-[100%] h-[100%] z-[-1] top-0'>
          <Background></Background>
        </div>
        </BackgroundRenderContext>

        {/** application */}
        <ApplicationRenderContext>
          <Suspense>
            <div className="md:hidden flex h-1/2 w-full fixed z-3" onClick={()=>{
              scrollValue.state !== 0 && updateScroll("state",scrollValue.state-1)
            }}></div>
            <div className="grid grid-cols-1 grid-rows-3 w-full h-screen z-1">
              <div className="flex items-start">
                <NavBar buttons={buttons} logo="Hello!"></NavBar>
              </div>
              <div className="flex items-center"  >
                <ScrollPoints></ScrollPoints>
              </div>
              <div className="flex items-end">
                <Page/>
              </div>
            </div>
            <div className="md:hidden flex h-1/2 w-full fixed bottom-0 z-3" onClick={()=>{
              scrollValue.state !== scrollValue.numberScrollELements && updateScroll("state",scrollValue.state+1)
            }}></div>
          </Suspense>
        </ApplicationRenderContext>

    </>
  )
}

export default App
