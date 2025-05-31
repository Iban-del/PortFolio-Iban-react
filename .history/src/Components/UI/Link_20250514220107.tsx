import { motion } from "motion/react"

export interface LinkInterface{
    text:string,
    href?:string
}

const Link = ({
    text,
    href = '#'
}:LinkInterface)=>{

    return <motion.a
        href={href}
        className="font-medium text-2xl"
        whileHover={{
            
        }}
    >
        {text}
    </motion.a>

}

export default Link