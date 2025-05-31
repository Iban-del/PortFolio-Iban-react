/**
 * les fonctions permettent de rendre les contextes a différents niveau
 */

import type React from "react"
import type { Props } from "./GenericType"







export const ApplicationRenderContext: React.FC<Props> = ({
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

