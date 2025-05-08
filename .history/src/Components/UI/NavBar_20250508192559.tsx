import type { linkParameters } from "./Link"
import Link from "./Link"


export interface navBarContent{
    buttons:Array<linkParameters>
}

/**
 * composant NavBar
 */
const NavBar = ({
    buttons
}:navBarContent) =>{

    const b = buttons.map((e:linkParameters)=>{
        return <Link 
            text={e.text} 
            href={e.href} 
            className={e.className}
        ></Link>
    })
    
    return <nav className="bg-gray-800 h-24">
        {b}
    </nav>
}

export default NavBar