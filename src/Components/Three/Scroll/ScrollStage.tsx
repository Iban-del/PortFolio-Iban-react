import { useThree } from "@react-three/fiber"
import { scrollAnnimation } from "../Annimation/GaspAnnimation"
import { useCallback, useEffect} from "react"
import ApplicationHook from "../../../hooks/ApplicationHook"
import type { Coordinate } from "../Core/Type"

interface ScrollStageInterface {
    coordinate:Coordinate,
    stateScroll:number,
    onStage?:()=>void,
}

const ScrollStage = ({
    coordinate,
    stateScroll = -1,
    onStage
}:ScrollStageInterface) =>{

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
            onStage && onStage()
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