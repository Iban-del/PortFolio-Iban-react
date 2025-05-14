import { motion } from "motion/react"

/** interface du boutton */
export interface ButtonInterface {
    text:string

}


const Button = ({
    
}) =>{

    return <motion.button 
        type="button" 
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        whileHover={{
            scale:0.1
        }}
    >
        Dark
    </motion.button>
}

export default Button