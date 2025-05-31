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
        className="font-medium text-xl"
        whileHover={{
            color:'#ffffff63'
        }}
    >
        {text}
    </motion.a>

}

export default Link