import { createContext, useState } from "react";
import type { Context } from "../Core/GenericType";

export interface  ScrollContextInterface{
    state:number,
    setState:(c:number)=>void
}

export const ScrollContext = createContext<ScrollContextInterface | undefined>(undefined);

export const ScrollProvider = ({children}:Context) =>{
    const [state,setState] = useState<number>(0)

    return <ScrollContext.Provider value={{state,setState}}>
        {children}
    </ScrollContext.Provider>
}