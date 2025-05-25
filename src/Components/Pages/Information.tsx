import { motion } from "motion/react"
import ApplicationHook from "../../hooks/ApplicationHook"

/** page avec tous le protFolio en 2d */
const Information = () =>{

    const {scrollValue} = ApplicationHook()

    return (
        <motion.div 
            className="w-screen h-screen absolute bg-gray-900"
            initial={{bottom:"-90%"}}
            whileInView={{bottom:"9%"}}
        >
            
        </motion.div>
    )
}

export default Information