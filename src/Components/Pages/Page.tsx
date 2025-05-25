import ApplicationHook from "../../hooks/ApplicationHook"
import BottomBar from "../UI/BottomBar"
import Information from "./Information"
import { useApplication } from "../../context/ApplicationContext"

/** page avec tous le protFolio en 2d */
const Page = () =>{

    const {scrollValue,updateApplication} = ApplicationHook()
    const {view} = useApplication()

    return (
        <div className="w-screen fixed">
            {
                (scrollValue.state === scrollValue.numberScrollELements && !view) && <BottomBar click={()=>updateApplication('view',!view)}/> 
            }
            {
                view && <Information/>
            }
            
        </div>
    )
}

export default Page