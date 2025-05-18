import { createContext, useState } from "react";
import type { Context, StateContextInterface } from "../Core/GenericType";


export const ScrollContext = createContext<StateContextInterface | undefined>(undefined);

export const ScrollProvider = ({children}:Context) =>{
    const [state,setState] = useState<number>(0)

    return <ScrollContext.Provider value={{state,setState}}>
        {children}
    </ScrollContext.Provider>
}