import { classNames } from "../../Tools/Tools"
import { motion } from "motion/react"

export interface linkParameters{
    text:string,
    href:string,
    className?:string,
}

const Link = ({
    text,
    href = "#" ,
    className = ""
}:linkParameters) =>{

        

    return <>
        <motion.a
            href={href} 
            className={classNames("font-medium text-blue-600 dark:text-blue-500 hover:underline none",className)}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
        >
            {text}
        </motion.a>
    </>
    
}

export default Link