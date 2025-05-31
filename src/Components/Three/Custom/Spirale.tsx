import { useMemo, type JSX } from "react"
import MeshComponent from "../UI/MeshComponent"
import Particle from "./Particle"

interface SpiraleInterface{
    numberElement?:number
    
}

const Spirale = ({
    numberElement = 500
}:SpiraleInterface) =>{

    const maxTheta =  2.5*Math.PI;

    const r = (theta:number) =>{
        return 1+1*theta
    }
    

    const sp = useMemo(()=>{
        const list:Array<JSX.Element> = []
        for(let i = 0; i < numberElement;i++){
            const theta = (i / numberElement) * maxTheta;
            const R = r(theta); 
            list.push(<Particle
                key={i+"-spiral"}
                boxArgs={[Math.random()/100,Math.random(),0]}
                position={[
                    R*Math.cos(theta),
                    R*Math.sin(theta),
                    0
                ]}
            />)
        }
        return list
    },[])

    return (
        <MeshComponent >
            {sp}
        </MeshComponent>
    )

}



export default Spirale