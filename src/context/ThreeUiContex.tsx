// enssemble des ref des composant de three pour les annimer

import { createContext, createRef, useContext, type RefObject } from "react";
import type { Mesh } from "three";
import type { Context } from "../Core/GenericType";
import type { Coordinate } from "../Components/Three/Core/Type";
import { SCROLL_STEP } from "../Core/GlobalConstant";

type Ref = RefObject<Mesh|null>

interface ThreeUiType{
    mesh:Ref,
    defaultCoordinate:Coordinate,
}

interface TheeUi {
    MainPlanet:ThreeUiType,
    Rocket:ThreeUiType,
}

const TheeUiList:TheeUi = {
    MainPlanet:{mesh:createRef(),defaultCoordinate:[0,-SCROLL_STEP,-SCROLL_STEP]},
    Rocket:{mesh:createRef(),defaultCoordinate:[0,-(SCROLL_STEP*2),10]}
}

export const ThreeUiContex = createContext<TheeUi>(TheeUiList);


export const ThreeUiProvider = ({children}:Context) =>{

    return(
        <ThreeUiContex.Provider value={TheeUiList}>
            {children}
        </ThreeUiContex.Provider>
    )
}

export const useThreeUi = () =>{
    const context = useContext(ThreeUiContex)
    if(!context){
        throw new Error("Impossible de charger les composant three UI")
    }
    return context
}