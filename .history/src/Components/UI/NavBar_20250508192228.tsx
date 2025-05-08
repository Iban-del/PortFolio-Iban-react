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

    
    return <nav className="bg-gray-800">
        
    </nav>
}

export default NavBar