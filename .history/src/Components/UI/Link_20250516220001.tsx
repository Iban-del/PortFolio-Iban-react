import { motion } from "motion/react"

export interface LinkInterface{
    text:string,
    key?:string,
    onClick?: () => void
}

const Link = ({
    text,
    onClick
}:LinkInterface)=>{

    return <motion.a
        onClick={onClick}
        className="font-medium text-xl cursor-pointer"
        whileHover={{
            color:'#5454547e'
        }}
    >
        {text}
    </motion.a>

}

export default Link