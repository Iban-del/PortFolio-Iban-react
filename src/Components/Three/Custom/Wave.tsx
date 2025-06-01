import { useMemo, type JSX } from "react"
import MeshComponent from "../UI/MeshComponent"
import { AnnimatePosition } from "../Annimation/AnnimationCallback";
import Box from "../UI/Box";
type MeshType = JSX.IntrinsicElements['mesh'];

interface WaveInterface extends MeshType {
    pointStep?:number,
    amplitude?:number,
    sphereSize?:number
    number?:number
}

const Wave = ({
    pointStep = .2,
    amplitude = 0.5,
    sphereSize = 0.05,
    number =  40,
    ...props
}:WaveInterface) =>{
    const points = useMemo(()=>{
        const p = []
        let x = 0;
        let z = 0;
        for(let i = 0; i < number; i++){
            x = 0;
            z -= pointStep
            for(let a = 0 ; a < number; a++){
                x += pointStep
                const f = Math.cos(-x+z)*Math.sin(x+z)
                p.push(<Box
                    key={Math.random()} 
                    position={[x-5,f*amplitude,z]} 
                    //materialArgs={{emissive:"#fff",emissiveIntensity:t}} 
                    boxArgs={[sphereSize+0.5,0.01,0.0001]}
                    beforeRender={async (mesh)=>{
                        AnnimatePosition(mesh,f*(-(amplitude*2)))
                    }}
                />)
            }

        }
        return p
    },[pointStep, amplitude, sphereSize, number])

    return (
        <MeshComponent
            {...props}
        >
            {points}
        </MeshComponent>
    )

}

export default Wave