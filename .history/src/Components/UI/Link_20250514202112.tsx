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
        className=""
        initial={{ height: 2 }}
        whileHover={{ height: 6 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
        {text}
    </motion.a>

}

export default Link