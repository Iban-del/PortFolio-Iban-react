import { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react";
import type { Context } from "../Core/GenericType";
import { SCROLL_STEP } from "../Core/GlobalConstant";


export type ScrollIndex = 'state'|'direction'|'numberScrollELements'|'scrollStep'|'activeScroll'|'stageBefore'

export interface ScrollValuesInterface {
    state:number,
    stageBefore:number,
    direction:number,
    numberScrollELements:number,
    scrollStep:number,
    activeScroll:0|1
}

const ScrollValues:ScrollValuesInterface = {
    state:0,
    stageBefore:-1,
    direction:0,
    numberScrollELements:6,
    scrollStep:SCROLL_STEP,
    activeScroll:1
}

export const ScrollContextValue = createContext<ScrollValuesInterface>(ScrollValues);
export const ScrollContextDispatch = createContext<Dispatch<SetStateAction<ScrollValuesInterface>>|undefined>(undefined);

export const ScrollProvider = ({children}:Context) =>{
    const [value,setValue] = useState<ScrollValuesInterface>(ScrollValues)

    return (
        
        
        <ScrollContextValue.Provider value={value}>
            <ScrollContextDispatch.Provider value={setValue}>
                {children}
            </ScrollContextDispatch.Provider>
        </ScrollContextValue.Provider>
        
        
    )
}

export const useScroll = () =>{
    const context = useContext(ScrollContextValue)
    if(!context){
        throw new Error("Impossible de charger le scroll")
    }
    return context
}

export const useScrollDispatch = () =>{
    const dispatch = useContext(ScrollContextDispatch)
    if(!dispatch){
        throw new Error("Impossible de charger le scroll")
    }
    return dispatch
}