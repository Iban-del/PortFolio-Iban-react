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
        className="hover:underline"
        whileHover={{scale:1.1}}
    >
        {text}
    </motion.a>

}

export default Link