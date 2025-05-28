import { useMemo } from "react"
import MeshComponent from "../UI/MeshComponent"
import Sphere from "../UI/Sphere";



interface WaveInterface {
    pointStep?:number;
}

const Wave = ({
    pointStep = 1
}:WaveInterface) =>{


    const points = useMemo(()=>{
        const p = []
        let x = 0;
        let z = 0;
        let y = 0;
        for(let i = 0; i < 10; i++){
            y = 0;
            x = 0;
            for(let a = 0 ; a < 10; a++){
                p.push(<Sphere key={Math.random()} position={[x,y,z]} materialArgs={{emissive:"#fff",emissiveIntensity:1}} sphereArgs={[0.5,32,16,0,Math.PI*2,0,Math.PI]} />)
                x+= pointStep
                y += pointStep
            }
            z -= pointStep
        }
        return p
    },[])

    return (
        <MeshComponent>
            {points}
        </MeshComponent>
    )

}

export default Wave