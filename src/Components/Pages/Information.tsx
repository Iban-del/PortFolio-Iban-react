import { motion } from "motion/react"
import ApplicationHook from "../../hooks/ApplicationHook"

/** page avec tous le protFolio en 2d */
const Information = () =>{

    const {scrollValue} = ApplicationHook()

    return (
        <motion.div 
            className="w-screen h-screen absolute bg-gray-50"
            initial={{bottom:-window.innerHeight}}
            whileInView={{bottom:0}}
        >
            <div className="">
                
            </div>
        </motion.div>
    )
}

export default Information