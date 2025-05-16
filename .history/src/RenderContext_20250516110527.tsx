/**
 * les fonctions permettent de rendre les contextes a différents niveau
 */

import type React from "react"

interface RenderContextInterface {
    childrens:React.FC
}


export const ApplicationRenderContext = ({
    childrens
}:RenderContextInterface) =>{

    return <>
        {childrens}
    </>

}

export const BackgroundRenderContext = () =>{

}

export const GenericRenderContext = () =>{

}