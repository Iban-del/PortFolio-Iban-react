import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"
import Background from "./Components/Three/Background"
import './index.css'
import { ApplicationRenderContext, BackgroundRenderContext, GenericRenderContext } from "./Core/RenderContext"
import { Suspense } from "react"
import ScrollPoints from "./Components/UI/ScrollPoints"
import Page from "./Components/Pages/Page"
import { useApplication } from "./context/ApplicationContext"
import ApplicationHook from "./hooks/ApplicationHook"



function App() {

  const {updateApplication} = ApplicationHook()
  const {view} = useApplication()

  const buttons:Array<LinkInterface> = [
    {text:'Musique',key:'music',onClick:(e,r)=>{}},
    {text:"Me contacter",key:'contact'},
    {text:"Mes Information",key:'info' , onClick:()=>updateApplication("view",!view)},
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
            <div className="grid grid-cols-1 grid-rows-3 w-full h-screen z-1">
              <div className="flex items-start z-2">
                <NavBar buttons={buttons}></NavBar>
              </div>
              <div className="flex items-center z-2"  >
                <ScrollPoints></ScrollPoints>
              </div>
              <div className="flex items-end z-2">
                <Page/>
              </div>
            </div>
          </Suspense>
        </ApplicationRenderContext>

    </>
  )
}

export default App
