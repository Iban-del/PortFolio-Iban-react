import { motion } from "motion/react"
import ApplicationHook from "../../hooks/ApplicationHook"
import BottomBar from "../UI/BottomBar"

/** page avec tous le protFolio en 2d */
const Page = () =>{

    const {scrollValue} = ApplicationHook()

    return (
        <div className="w-screen h-screen fixed">
            {
                scrollValue.state === scrollValue.numberScrollELements && <div> <BottomBar/> </div>
            }
            
        </div>
    )
}

export default Page