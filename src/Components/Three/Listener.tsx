import { useEffect, useState } from "react";
import ApplicationHook from "../../hooks/ApplicationHook";
import { useThree } from "@react-three/fiber";
import { scrollAnnimation } from "./Annimation";



/**
 * cette fonction vas gérer les listeners générale de three fiber
 */
const Listener = () =>{

    const {scroll,numberScrollELements,scrollStep} = ApplicationHook()
    const {camera} = useThree()
    const [activeScroll,setActiveScroll] = useState(true);

    useEffect(()  => {
        const onWheel = (e: WheelEvent) => {
            if (scroll && activeScroll) {
                setActiveScroll(false)
                const delta = e.deltaY;
                const newValue = ScrollDirection(delta,numberScrollELements, scroll.state,()=>{
                    scrollAnnimation({
                        coordinate:[0,delta < 0 ? scrollStep : -scrollStep,0],
                        component:camera,
                        onFinish:()=>setActiveScroll(true)
                    })},
                    ()=>{
                        setActiveScroll(true)
                    });
                
                scroll.setState(newValue);
            }
        };

        
        const mouseMove = async (e:MouseEvent) =>{
            
        }

        
        
        window.addEventListener("wheel", onWheel);
        window.addEventListener("mousemove",mouseMove)
        if(!activeScroll)window.removeEventListener("wheel", onWheel);

        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("mousemove",mouseMove);
        };
    }, [scroll,numberScrollELements,activeScroll,camera]);

    return null;
}



const ScrollDirection = (delta:number,max:number,value:number,onChange?:()=>void,onNotChange?:()=>void) =>{
    let returnValue = delta > 0 ? value+1 : value-1;

    if(returnValue < 0){
        returnValue = 0
        onNotChange && onNotChange()
    }else if(returnValue > max){
        returnValue = max
        onNotChange && onNotChange()
    }else if(onChange){
        onChange()
    }

    return returnValue;
}



export default Listener