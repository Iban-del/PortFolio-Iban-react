import { motion } from "motion/react"
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";
import { useState } from "react";

interface BottomBarInterface{
    click:(deploy:boolean)=>void
}

const BottomBar = ({
    click
}:BottomBarInterface) =>{

    const [deploy,setDeploy] = useState(false)

    const onClick = () =>{
        setDeploy(!deploy)
        click(deploy)
    }

    return (
        <motion.div
            className="w-screen h-30 absolute inset-x-0 bg-gray-100/20 border-t-8 border-b-gray-50 z-100"
            initial={{bottom:"9%"}}
            whileInView={{bottom:"0%"}}
        >
            <div className="flex w-full h-full justify-center items-center">
                {!deploy && <SlArrowDown onClick={onClick} className="cursor-pointer" size={50} />}
                {deploy && <SlArrowUp onClick={onClick} className="cursor-pointer" size={50} />}
            </div>
        </motion.div>
    )
}

export default BottomBar