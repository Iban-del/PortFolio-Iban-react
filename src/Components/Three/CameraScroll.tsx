import { useThree } from "@react-three/fiber"
import ScrollListener from "./ScrollListener"
import { scrollAnnimation } from "./Annimation"
import { useCallback, useState, type Dispatch, type SetStateAction } from "react"
import ApplicationHook from "../../hooks/ApplicationHook"
import type { Coordinate } from "./Type"

interface CameraScrollInterface {
    onScrollUp?:()=>void,
    onScrollDown?:()=>void,
    coordinate:Coordinate
    coordinateDown:Coordinate,
    stateScroll:number,
}

const CameraScroll = ({
    onScrollUp,
    onScrollDown,
    coordinateDown,
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
        if(scrollValue.state-1 === stateScroll || stateScroll === -1){
            onScrollUp && onScrollUp()
            annimation(coordinate)
        }
        
    },[scrollValue])

    const onDown = useCallback(() =>{
        if(scrollValue.state === stateScroll || stateScroll === -1){
            onScrollDown && onScrollDown()
            annimation(coordinateDown)
        }
    },[scrollValue])

    const active = useCallback((e:number) =>{
        updateScroll("activeScroll",e)
    },[scrollValue])

    return (
        <ScrollListener
            onScrollDown={onDown}
            onScrollUp={onUp}
            activeScroll={scrollValue.activeScroll}
            setActiveScroll={(e:number)=>active(e)}
        />
    )
}

export default CameraScroll