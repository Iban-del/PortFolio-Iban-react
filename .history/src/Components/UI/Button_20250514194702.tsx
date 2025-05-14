import { motion } from "motion/react"

/** interface du boutton */
export interface ButtonInterface {
    text:string
    onClick = () => void
}


const Button = ({
    text
}:ButtonInterface) =>{

    return <motion.button 
        type="button" 
        className="text-white cursor-pointer bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:border-gray-700"
        whileHover={{scale:1.1}}
        whileTap={{scale:1}}
    >
        {text}
    </motion.button>
}

export default Button