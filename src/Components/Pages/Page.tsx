import ApplicationHook from "../../hooks/ApplicationHook"
import BottomBar from "../UI/BottomBar"
import Information from "./Information"
import { useApplication } from "../../context/ApplicationContext"
import { AnimatePresence } from "motion/react"
import Help from "./Help"

/** page avec tous le protFolio en 2d */
const Page = () =>{

    const {scrollValue,updateApplication} = ApplicationHook()
    const {view,helpView} = useApplication()

    return (
        
            <div className="w-screen fixed z-4">
            <AnimatePresence>
                {
                    helpView && <Help/>
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    view && <Information/>
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    (scrollValue.state === scrollValue.numberScrollELements && !view) && <BottomBar click={()=>updateApplication('view',!view)}/> 
                }
            </AnimatePresence>
        </div>
        
    )
}

export default Page