import { AnimatePresence, motion } from "motion/react"
import ApplicationHook from "../../hooks/ApplicationHook"
import { SlSizeActual } from "react-icons/sl";
import { useApplication } from "../../context/ApplicationContext";
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
                    <div className="overflow-auto h-[95%]">
                        <div className="row-span-8 h-[2000px] flex justify-center">
                            <div className="sm:w-1/2 w-[95%] h-full">
                                <div className="h-[90px] w-full">
                                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">Mes informations</h1>
                                    <hr className="h-px my-8 w-1/2 border-0 bg-gray-700"></hr>
                                </div>
                                <div className="h-[1900px] w-full grid grid-cols-1 grid-rows-3">
                                    <div>

                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
    )
}

export default Information