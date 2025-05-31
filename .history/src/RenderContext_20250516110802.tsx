/**
 * les fonctions permettent de rendre les contextes a différents niveau
 */

import type React from "react"



interface RenderContextInterface {
    childrens:string | JSX.Element | JSX.Element[] | () => JSX.Element
}


export const ApplicationRenderContext = ({
    childrens
}) =>{

    return <>
        {childrens}
    </>

}

export const BackgroundRenderContext = ({
    childrens
}) =>{

    return <>
        {childrens}
    </>

}

export const GenericRenderContext = ({
    childrens
}) =>{

    return <>
        {childrens}
    </>

}

