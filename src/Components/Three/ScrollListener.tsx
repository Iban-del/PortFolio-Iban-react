import { useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import ApplicationHook from "../../hooks/ApplicationHook";
import { useThree } from "@react-three/fiber";



interface ListenerInterface{
    onScrollUp:()=>void,
    onScrollDown:()=>void,
    activeScroll:number,
    setActiveScroll:(e:number)=>void
}

const ScrollListener = ({
    onScrollUp,
    onScrollDown,
    activeScroll,
    setActiveScroll
}:ListenerInterface) =>{

    const {scrollValue,updateScroll} = ApplicationHook()
    const {camera} = useThree()

    useEffect(()  => {  
        const onWheel = (e: WheelEvent) => {
            if (activeScroll) {
                setActiveScroll(0)
                const delta = e.deltaY;
                const newValue = ScrollDirection(delta,scrollValue.numberScrollELements,scrollValue.state,
                    () =>{onScrollUp()},
                    () =>{onScrollDown()},
                    () =>setActiveScroll(1)
                )
                if (newValue !== scrollValue.state) {
                    updateScroll("state", newValue);
                }
            }
        };
    
        window.addEventListener("wheel", onWheel,{ passive: true });
    
        if(!activeScroll)window.removeEventListener("wheel", onWheel);

        return () => {
            window.removeEventListener("wheel", onWheel);
        };
    }, [scrollValue, activeScroll,camera]);

    return null;
}


const ScrollDirection = (
    delta:number,
    max:number,
    value:number,
    onScrollUp?:()=>void,
    onScrollDown?:()=>void,
    onNotChange?:()=>void
) =>{
    let returnValue;

    if(delta > 0){
        returnValue = value+1;
        onScrollDown && onScrollDown()
    }else{
        returnValue = value-1;
        onScrollUp && onScrollUp()
    }

    if(returnValue < 0){
        returnValue = 0
        onNotChange && onNotChange()
    }else if(returnValue >= max){
        returnValue = max
        onNotChange && onNotChange()
    }

    return returnValue
}



export default ScrollListener