import { motion } from "motion/react"

export interface LinkInterface{
    text:string,
    onClick?: () => void
}

const Link = ({
    text,
    onClick
}:LinkInterface)=>{

    return <motion.a
        className="font-medium text-xl"
        whileHover={{
            color:'#ffffff63'
        }}
    >
        {text}
    </motion.a>

}

export default Link