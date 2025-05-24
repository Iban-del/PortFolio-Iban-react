import { motion } from "motion/react"
import ApplicationHook from "../../hooks/ApplicationHook"
import { SlArrowDown } from "react-icons/sl";
/** page avec tous le protFolio en 2d */
const BottomBar = () =>{

    const {scrollValue} = ApplicationHook()

    return (
        <motion.div
            className="w-screen h-30 absolute inset-x-0 bg-gray-100/20 border-t-8 border-b-gray-50"
            initial={{bottom:0}}
            whileInView={{bottom:95}}
        >
            <SlArrowDown/>
        </motion.div>
    )
}

export default BottomBar