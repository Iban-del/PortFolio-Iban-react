import { motion } from "motion/react"

export interface LinkInterface{
    text:string,
    href:string
}

const Link = ({
    text
}:LinkInterface)=>{

    return <motion.a
    
    >
        {text}
    </motion.a>

}

export default Link