import { useEffect } from "react";
import ApplicationHook from "../../hooks/ApplicationHook";
import { useThree } from "@react-three/fiber";
/**
 * cette fonction vas gérer les listeners générale
 */
const Listener = () =>{

    const {scroll} = ApplicationHook()
    const {camera} = useThree()

    useEffect(()=>{
        window.addEventListener('wheel',(e)=>{
            if(scroll){
                const delta = e.deltaY
                scroll.setState((e)=>{
                    return delta > 0?e+1:e-1
                })
            }
        })


    },[])

    return null;
}

export default Listener