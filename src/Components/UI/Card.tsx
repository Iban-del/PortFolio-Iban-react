import type { JSX } from "react"
import { motion } from "motion/react"


interface CardInterface {
    title:string
    children?: string | JSX.Element | JSX.Element[],
    size?:[number,number]|Array<number>
}

const Card = ({
    title,
    children,
    size = [120,120]
}:CardInterface) =>{

    return(
        <motion.div 
            style={{height:size[0],width:size[1]}} 
            className="shadow-xl/30 rounded-2xl "
            whileHover={{scale:1.1}}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:1}}
        >
            <h5 className="text-2xl font-bold tracking-tight flex justify-center">
                {title}
            </h5>
            <div className="font-normal flex justify-center mt-6">
                {children}
            </div>
        </motion.div>
    )

}

export default Card