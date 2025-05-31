import { createContext, useState } from "react";
import type { Props } from "../Core/GenericType";

export interface  ScrollContextInterface{
    state:number,
    setState:(c:number)=>void
}

export const ScrollContext = createContext<ScrollContextInterface | undefined>(undefined);

export const ScrollProvider = ({children}:Props) =>{
    const [state,setState] = useState<number>(0)

    return <ScrollContext.Provider value={{sta}}>
        {children}
    </ScrollContext.Provider>

}