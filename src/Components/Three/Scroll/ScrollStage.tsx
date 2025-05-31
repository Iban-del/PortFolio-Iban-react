import { useThree } from "@react-three/fiber"
import { useCallback, useEffect} from "react"
import ApplicationHook from "../../../hooks/ApplicationHook"
import type { Coordinate } from "../Core/Type"
import { MoveTo } from "../Annimation/AnnimationCallback"
import type { Camera } from "three"

interface ScrollStageInterface {
    coordinate:Coordinate,
    stateScroll:number,
    onStage?:(camera:Camera)=>void,
}

const ScrollStage = ({
    coordinate,
    stateScroll = -1,
    onStage
}:ScrollStageInterface) =>{

    const {camera} = useThree()
    const {scrollValue,updateScroll} = ApplicationHook()

    const onUp = useCallback(() =>{
        if(scrollValue.state === stateScroll || stateScroll === -1){
            MoveTo(coordinate,camera,()=>active(1))
            onStage && onStage(camera)
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

export default ScrollStage