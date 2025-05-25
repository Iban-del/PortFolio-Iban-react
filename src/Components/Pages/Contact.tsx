import { AnimatePresence, motion } from "motion/react"


const Contact = () =>{

    

    return (
        <div className="p-4 flex flex-col justify-center items-center">
            <hr className="h-px my-8 border-0 bg-gray-700 w-[90%]"></hr>
            <div className="h-[20%]">
                <h4 className="text-2xl font-bold">Contactez-moi</h4>
            </div>
            
            <div className="flex justify-start items-center w-[90%]  mt-7">
                <motion.div initial={{ opacity: 0 }} whileInView={{opacity:1}}>
                    <ul>
                        <li>
                            Github
                        </li>
                    </ul>
                </motion.div> 
            </div>
        </div>
    )

}

export default Contact