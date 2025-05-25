import ApplicationHook from "../../hooks/ApplicationHook"
import BottomBar from "../UI/BottomBar"
import Information from "./Information"
import { useApplication } from "../../context/ApplicationContext"
import { AnimatePresence } from "motion/react"

/** page avec tous le protFolio en 2d */
const Page = () =>{

    const {scrollValue,updateApplication} = ApplicationHook()
    const {view} = useApplication()

    return (
        
            <div className="w-screen fixed">
            <AnimatePresence>
                {
                    view && <Information/>
                }
                {
                    (scrollValue.state === scrollValue.numberScrollELements && !view) && <BottomBar click={()=>updateApplication('view',!view)}/> 
                }
            </AnimatePresence>
        </div>
        
    )
}

export default Page