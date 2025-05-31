/**
 * les fonctions permettent de rendre les contextes a différents niveau
 */

import type React from "react"
import type { Props } from "./GenericType"







export const ApplicationRenderContext: React.FC<Props> = ({
    children
}) =>{

    return <>
        {children}
    </>

}

export const BackgroundRenderContext: React.FC<Props> = ({
    children
}) =>{

    return <>
        {children}
    </>

}

export const GenericRenderContext: React.FC<Props> = ({
    children
}) =>{

    return <>
        {children}
    </>

}

