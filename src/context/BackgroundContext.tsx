import { createContext, useState } from "react";
import type { Context, StateContextInterface } from "../Core/GenericType";



export const ScaleContext = createContext<undefined | StateContextInterface>(undefined)

export const ScaleProvider = ({children}:Context) =>{

    const [state,setState] = useState<number>(1);

    return <ScaleContext.Provider value={{state,setState}}>
        {children}
    </ScaleContext.Provider>

}