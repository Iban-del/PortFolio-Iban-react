import { motion } from "motion/react"
import ApplicationHook from "../../hooks/ApplicationHook"
import { SlSizeActual } from "react-icons/sl";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Contact from "./Contact";
import Currently from "./Currently";





/** page avec tous le protFolio en 2d */
const Information = () =>{

    const {updateApplication} = ApplicationHook()

    return (
        
            <motion.div 
                className="w-screen h-screen absolute bg-gray-50 text-gray-900"
                initial={{bottom:-window.innerHeight}}
                animate={{bottom:0,backgroundColor:"#fff"}}
                exit={{ bottom:-window.innerHeight }}
            >
                <div className="flex flex-col w-full h-screen">
                    <div className="flex row-span-1 h-[57px] p-4 items-center">
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
                        <div className="sm:w-1/2 lg:w-[80%] w-full">
                            <div className="h-[400px] flex flex-col justify-center items-center">
                                <AboutMe></AboutMe>
                            </div>
                            <div className="h-[200px]"></div>
                            <div>
                                <Skills></Skills>
                            </div>
                            <div className="h-[200px]"></div>
                            <div>
                                <Project></Project>
                            </div>
                            <div className="h-[200px]"></div>
                            <div>
                                <Currently></Currently>
                            </div>
                            <div className="h-[200px]"></div>
                            <div>
                                <Contact></Contact>
                            </div>
                            <div className="h-[200px]"></div>
                        </div>
                    </div>
                </div>
            </motion.div>
    )
}

export default Information