import { createContext, useState } from "react";
import type { Context } from "../Core/GenericType";

export interface BackgroundContextInterface{
    state:number,
    setState:(c:number)=>void
}

export const ScaleContext = createContext<undefined | BackgroundContextInterface>(undefined)

export const ScaleProvider = ({children}:Context) =>{

    const [state,setState] = useState<number>(1);

    return <ScaleContext.Provider value={{state,setState}}>
        {children}
    </ScaleContext.Provider>

}