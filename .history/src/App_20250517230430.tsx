import NavBar from "./Components/UI/NavBar"
import { type LinkInterface } from "./Components/UI/Link"
import Background from "./Components/Three/Background"
import './index.css'
import { ApplicationRenderContext, BackgroundRenderContext, GenericRenderContext } from "./Core/RenderContext"
import ScrollPoints from "./Components/UI/ScrollPoints"
import ApplicationHook from "./hooks/ApplicationHook"



function App() {


  const {numberScrollELements,scroll} = ApplicationHook()

  const buttons:Array<LinkInterface> = [
    {text:'Musique',key:'music'},
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
            <NavBar buttons={buttons}></NavBar>
            <ScrollPoints numberELements={numberScrollELements} activeElement={scroll?.state}></ScrollPoints>
        </ApplicationRenderContext>
      </GenericRenderContext>
    </>
  )
}

export default App
