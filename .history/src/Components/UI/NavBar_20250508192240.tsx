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

    
    return <nav className="bg-gray-800 h-15">
        
    </nav>
}

export default NavBar