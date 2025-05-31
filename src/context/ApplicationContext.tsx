import { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react"
import type { Context } from "../Core/GenericType"

export type ApplicationIndex = "view"|"helpView"

export interface  ApplicationInterface {
    view:boolean,
    helpView:boolean
}

export const ApplicationDefaultValues:ApplicationInterface ={
    view:false,
    helpView:false
}


export const ApplicationContext = createContext<ApplicationInterface>(ApplicationDefaultValues)
export const ApplicationDispatch = createContext<Dispatch<SetStateAction<ApplicationInterface>>|undefined>(undefined)

export const ApplicationProvider = ({children}:Context) =>{

    const [state,setState] = useState<ApplicationInterface>(ApplicationDefaultValues)

    return(
        <ApplicationContext.Provider value={state}>
            <ApplicationDispatch.Provider value={setState}>
                {children}
            </ApplicationDispatch.Provider>
        </ApplicationContext.Provider>
    )
}

export const useApplication = () =>{
    const context = useContext(ApplicationContext)
    if(!context){
        throw new Error("Impossible de charger les données de l'application")
    }
    return context
}

export const useApplicationDispatch = () =>{
    const dispatch = useContext(ApplicationDispatch)
    if(!dispatch){
        throw new Error("Impossible de charger le dispatch de l'application")
    }
    return dispatch
}