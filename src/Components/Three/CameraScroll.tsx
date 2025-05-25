import { useThree } from "@react-three/fiber"
import ScrollListener from "./ScrollListener"
import { scrollAnnimation } from "./Annimation"
import { useCallback, useEffect, useState, type Dispatch, type SetStateAction } from "react"
import ApplicationHook from "../../hooks/ApplicationHook"
import type { Coordinate } from "./Type"

interface CameraScrollInterface {
    coordinate:Coordinate
    stateScroll:number,
}

const CameraScroll = ({
    coordinate,
    stateScroll = -1,
}:CameraScrollInterface) =>{

    const {camera} = useThree()
    const {scrollValue,updateScroll} = ApplicationHook()

    const annimation = (c:Coordinate) => {
        
        scrollAnnimation({
            coordinate:c,
            component:camera,
            onFinish:()=>{
                active(1)
            }
        })
    }

    const onUp = useCallback(() =>{
        if(scrollValue.state === stateScroll || stateScroll === -1){
            annimation(coordinate)
        }
        
    },[scrollValue])

    const active = useCallback((e:number) =>{
        updateScroll("activeScroll",e)
    },[scrollValue])
    
    useEffect(()=>{
        onUp()
    },[scrollValue.state])

    return (
        null
    )
}

export default CameraScroll