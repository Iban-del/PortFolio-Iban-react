import { motion } from "motion/react"

/** interface du boutton */
export interface ButtonInterface {
    text:string
    main?:boolean,
    onClick?: () => void
}


const Button = ({
    text,
    onClick,
    main = false
}:ButtonInterface) =>{

    const classCss = main ? 
        "text-gray-900  border border-gray-800 hover:bg-gray-900 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" 
        :"text-white cursor-pointer bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:border-gray-700";

    return <motion.button 
        type="button" 
        className={classCss}
        whileHover={{scale:1.1}}
        whileTap={{scale:1}}
        onClick={onClick}
    >
        {text}
    </motion.button>
}

export default Button