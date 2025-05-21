import { motion } from "motion/react"
import { useEffect, useRef, type SyntheticEvent } from "react"

export interface LinkInterface{
    text:string,
    key?:string,
    onClick?: (e:MouseEvent,r:HTMLAnchorElement)=> void
}

const Link = ({
    text,
    onClick
}:LinkInterface)=>{

    const linkRef = useRef<HTMLAnchorElement>(null)

    useEffect(()=>{
        if(linkRef.current){
            linkRef.current.addEventListener("click",(e)=>{
                onClick && onClick(e,linkRef.current as HTMLAnchorElement)
            })
        }
    },[linkRef])

    return <motion.a
        ref={linkRef}
        className="font-medium text-xl cursor-pointer"
        whileHover={{
            color:'#5454547e'
        }}
    >
        {text}
    </motion.a>

}

export default Link