import { classNames } from "../../Tools/Tools"
import { motion } from "motion/react"

interface linkParameters{
    text:string,
    href:string,
    className:string,
    useAnnimation:boolean
}

const Link = ({
    text,
    href = "#" ,
    className = "",
    useAnnimation = false
}:linkParameters) =>{

        

    return <>
        <motion.a href={href} className={classNames("font-medium text-blue-600 dark:text-blue-500 hover:underline",className)}>
            {text}
        </motion.a>
    </>
    
}

export default Link