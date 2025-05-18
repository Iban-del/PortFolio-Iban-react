/**
 * les fonctions permettent de rendre les contextes a différents niveau
 */

import type React from "react"
import type { Props } from "./GenericType"
import { ScrollProvider } from "../context/ScrollContext"
import { ScaleProvider } from "../context/BackgroundContext"








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
        <ScaleProvider>
            {children}
        </ScaleProvider>
    </>
}

export const GenericRenderContext: React.FC<Props> = ({
    children
}) =>{

    return <>
        <ScrollProvider>
            {children}
        </ScrollProvider>
    </>

}

