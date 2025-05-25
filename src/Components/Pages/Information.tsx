import { AnimatePresence, motion } from "motion/react"
import ApplicationHook from "../../hooks/ApplicationHook"
import { SlSizeActual } from "react-icons/sl";
import { useApplication } from "../../context/ApplicationContext";
import Card from "../UI/Card";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Contact from "./Contact";





/** page avec tous le protFolio en 2d */
const Information = () =>{

    const {scrollValue,updateApplication} = ApplicationHook()

    return (
        
            <motion.div 
                className="w-screen h-screen absolute bg-gray-50 text-gray-900"
                initial={{bottom:-window.innerHeight}}
                animate={{bottom:0,backgroundColor:"#fff"}}
                exit={{ bottom:-window.innerHeight }}
            >
                <div className="flex flex-col w-full h-screen">
                    <div className="flex row-span-1 h-[57px] p-4">
                        <h1 className="text-5xl font-extrabold ">Informations</h1>
                        <div className="flex justify-end w-full">
                            <motion.div 
                                className="cursor-pointer text-gray-900" 
                                onClick={()=>updateApplication("view",false)}
                                whileHover={{scale:1.1}}
                                whileTap={{scale:0.8}}
                            >
                                <SlSizeActual size={30} />
                            </motion.div>
                        </div>
                    </div>
                    <div className="overflow-auto flex justify-center">
                        <div className="sm:w-1/2 w-full">
                            <div className="h-[400px] flex flex-col justify-center items-center">
                                <AboutMe></AboutMe>
                            </div>
                            <div>
                                <Skills></Skills>
                            </div>
                            <div>
                                <Project></Project>
                            </div>
                            <div>
                                <Contact></Contact>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
    )
}

export default Information