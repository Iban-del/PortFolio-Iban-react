import { motion } from "motion/react"
import ApplicationHook from "../../hooks/ApplicationHook"
import BottomBar from "../UI/BottomBar"
import { useState } from "react"
import Information from "./Information"

/** page avec tous le protFolio en 2d */
const Page = () =>{

    const {scrollValue} = ApplicationHook()
    const [deploy,setDeploy] = useState(false)



    return (
        <div className="w-screen fixed">
            {
                scrollValue.state === scrollValue.numberScrollELements && <div> <BottomBar click={()=>setDeploy(!deploy)}/> </div>
            }
            {
                (scrollValue.state === scrollValue.numberScrollELements && deploy) && <Information/>
            }
            
        </div>
    )
}

export default Page