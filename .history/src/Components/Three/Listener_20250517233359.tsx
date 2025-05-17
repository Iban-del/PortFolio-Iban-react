import { useEffect } from "react";
import ApplicationHook from "../../hooks/ApplicationHook";
import { useThree } from "@react-three/fiber";
import { sleep } from "../../Core/Tools";
/**
 * cette fonction vas gérer les listeners générale
 */
const Listener = () =>{

    const {scroll,numberScrollELements} = ApplicationHook()
    const {camera} = useThree()

    useEffect(() => {
        const onWheel = async (e: WheelEvent) => {
            if (scroll) {
                const delta = e.deltaY;
                const newValue = ScrollDirection(delta, numberScrollELements, scroll.state);
                scroll.setState(newValue);
            }
        };

        const mouseMove = async (e:MouseEvent) =>{
            
        }

        window.addEventListener("wheel", onWheel);
        window.addEventListener("mousemove",mouseMove)

        return () => {
            window.removeEventListener("wheel", onWheel);
        };
    }, [scroll, numberScrollELements]);

    return null;
}

const ScrollDirection = (delta:number,max:number,value:number) =>{
    let returnValue = delta > 0 ? value+1 : value-1;
    if(returnValue < 0) returnValue = 0;
    if(returnValue > max) returnValue = max;
    return returnValue;
}

const moveCamera = () =>{
    
}

export default Listener