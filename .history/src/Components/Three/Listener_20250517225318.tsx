import { useEffect } from "react";
import ApplicationHook from "../../hooks/ApplicationHook";
import { useThree } from "@react-three/fiber";
/**
 * cette fonction vas gérer les listeners générale
 */
const Listener = () =>{

    const {scroll,numberScrollELements} = ApplicationHook()
    const {camera} = useThree()

    useEffect(()=>{
        window.addEventListener('wheel',(e)=>{
            if(scroll){
                const delta = e.deltaY
                
            }
        })


    },[])

    return null;
}

const ScrollDirection = (delta:number,max:number,value:number) =>{
    let returnValue = delta > 0 ? value+1 : value-1;

    return returnValue
}

export default Listener