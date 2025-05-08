import type { linkParameters } from "./Link"


export interface navBarContent{
    buttons:Array<linkParameters>
}

/**
 * composant NavBar
 */
const NavBar = ({
    buttons
}:navBarContent) =>{

    buttons.map((e)=>{

    })
    
    return <nav className="bg-gray-800 h-24">
        
    </nav>
}

export default NavBar