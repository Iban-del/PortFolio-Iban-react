/**
 * les fonctions permettent de rendre les contextes a différents niveau
 */

import type React from "react"
import type { Props } from "./GenericType"
import { ScrollProvider } from "../context/ScrollContext"
import { ScaleProvider } from "../context/BackgroundContext"
import { ApplicationProvider } from "../context/ApplicationContext"
import { ThreeUiProvider } from "../context/ThreeUiContex"








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
        <ThreeUiProvider>
            <ScaleProvider>
                {children}
            </ScaleProvider>
        </ThreeUiProvider>        
    </>
}

export const GenericRenderContext: React.FC<Props> = ({
    children
}) =>{

    return <>
        <ApplicationProvider>
            <ScrollProvider>
                {children}
            </ScrollProvider>
        </ApplicationProvider>
    </>

}

