import { useEffect, useRef, useState } from "react";
import type { LinkInterface } from "./Link";
import Link from "./Link";
import { motion } from "motion/react"

export interface NavBarInterface{
    buttons:Array<LinkInterface>

}

/** NavBar */
const NavBar = ({
    buttons
}:NavBarInterface) =>{

    const [showButton,setShowButton] = useState(false);
    const button = useRef(undefined);
    const buttonList = useRef(undefined);


    const onHoverStart = () => {
        setShowButton(true)
    }
    
    const onHoverEnd = () => {
        setShowButton(false)
    }
    


    return <div className="w-[100%] transparent h-24">
        <div className="flex w-[30%] bg-green-10">
            <motion.div
                onHoverStart={()=>onHoverStart()}
                onHoverEnd={()=>onHoverEnd()}
                className="m-9 w-[100%] flex bg-green-11 space-x-4"
            >
                <motion.svg 
                    ref={button.current}
                    whileHover={{rotate:50}}
                    className="cursor-pointer relative bg-green-8" 
                    width="50" 
                    height="50" 
                    viewBox="0 0 15 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </motion.svg>

                {showButton &&
                <motion.div
                    ref={buttonList.current}
                    whileInView={{left:20,display:'block'}}
                    className="relative flex w-[150px] space-x-4 bg-green-9"
                >
                    {buttons.map((e)=>{
                        return <Link text={e.text} href={e.href}></Link>
                    })}
                </motion.div>
                }

            </motion.div>
            
        </div>        
    </div>
}

export default NavBar;