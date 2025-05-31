import { useMemo, type JSX } from "react"
import MeshComponent from "../UI/MeshComponent"
import { MathUtils } from 'three'
import Particle from "./Particle"

interface GalaxyInterface{
    numberElement?:number
    
}

const Galaxy = ({
    numberElement = 500
}:GalaxyInterface) =>{

    


    const gl = useMemo(()=>{
        const list:Array<JSX.Element> = []
        for(let i = 0; i < numberElement;i++){ 
            list.push(<Particle
                key={i+"-galaxy"}
                boxArgs={[Math.random()/200,Math.random(),0]}
                position={[
                    MathUtils.randFloatSpread(3)/i,
                    MathUtils.randFloatSpread(2)*3,
                    0
                ]}
            />)
        }
        return list
    },[])

    return (
        <MeshComponent >
            {gl}
        </MeshComponent>
    )

}



export default Galaxy