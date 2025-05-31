import { useMemo, type JSX } from "react"
import MeshComponent from "../UI/MeshComponent"
import Sphere from "../UI/Sphere";
type MeshType = JSX.IntrinsicElements['mesh'];

interface WaveInterface extends MeshType {
    pointStep?:number,
    amplitude?:number,
    sphereSize?:number
}

const Wave = ({
    pointStep = .2,
    amplitude = 0.5,
    sphereSize = 0.05,
    ...props
}:WaveInterface) =>{

    const points = useMemo(()=>{
        const p = []
        let x = 0;
        let z = 0;
        for(let i = 0; i < 30; i++){
            x = 0;
            z -= pointStep
            for(let a = 0 ; a < 30; a++){
                x += pointStep                
                p.push(<Sphere key={Math.random()} position={[x-5,amplitude*Math.cos(x+z),z]} materialArgs={{emissive:"#fff",emissiveIntensity:1}} sphereArgs={[sphereSize,32,16,0,Math.PI*2,0,Math.PI]}/>)
            }

        }
        return p
    },[])

    return (
        <MeshComponent
            {...props}
        >
            {points}
        </MeshComponent>
    )

}

export default Wave