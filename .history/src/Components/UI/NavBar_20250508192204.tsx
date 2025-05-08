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

    
    return <nav className="h-6 bg-blue">
        
    </nav>
}

export default NavBar