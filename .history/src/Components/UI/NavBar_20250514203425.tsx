import type { ButtonInterface } from "./Button";
import type { LinkInterface } from "./Link";


export interface NavBarInterface{
    buttons:Array<LinkInterface|ButtonInterface>

}

/** NavBar */
const NavBar = ({
    buttons
}:NavBarInterface) =>{
    return <div className="w-[100%] transparent h-24">

        <div className="hidden md:flex">
            {buttons.map(()=>{
                
            })}
        </div>   
        
        {/** mobile */}
        <div className="block md:hidden">
            
        </div>
    </div>
}

export default NavBar;