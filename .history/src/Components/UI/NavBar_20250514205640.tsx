import type { LinkInterface } from "./Link";
import Link from "./Link";


export interface NavBarInterface{
    buttons:Array<LinkInterface>

}

/** NavBar */
const NavBar = ({
    buttons
}:NavBarInterface) =>{
    return <div className="w-[100%] transparent h-24">

        <div className="hidden md:flex">
            {buttons.map((e)=>{
                return <Link text={e.text} href={e.href}></Link>
            })}
        </div>   
        
        {/** mobile */}
        <div className="block md:hidden">
            {buttons.map((e)=>{
                return <Link text={e.text} href={e.href}></Link>
            })}
        </div>
    </div>
}

export default NavBar;