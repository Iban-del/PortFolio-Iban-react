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
    return <div className="w-[100%] transparent h-24">
        <div>
            <motion.div>
                
            </motion.div>

            <motion.div
            
            >
                {buttons.map((e)=>{
                    return <Link text={e.text} href={e.href}></Link>
                })}
            </motion.div>
        </div>        
    </div>
}

export default NavBar;