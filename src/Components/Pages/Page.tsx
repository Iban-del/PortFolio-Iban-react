import { motion } from "motion/react"
import ApplicationHook from "../../hooks/ApplicationHook"
import BottomBar from "../UI/BottomBar"
import { useState } from "react"

/** page avec tous le protFolio en 2d */
const Page = () =>{

    const {scrollValue} = ApplicationHook()
    const [deploy,setDeploy] = useState(false)



    return (
        <div className="w-screen h-screen fixed">
            {
                scrollValue.state === scrollValue.numberScrollELements && <div> <BottomBar click={setDeploy}/> </div>
            }
            {
                deploy && <div>hello</div>
            }
            
        </div>
    )
}

export default Page