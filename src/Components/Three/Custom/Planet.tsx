import { useRef } from "react"
import MeshComponent from "../UI/MeshComponent"
import Sphere from "../UI/Sphere"
import Torus from "../UI/Torus"


interface planetInterface {
    R:number,
    speed?:number
    intensity?:number
}

const Planet = ({
    R,
    speed = 0.02,
    intensity = 1
}:planetInterface) =>{

    const angle = useRef<number>(0);

    return <MeshComponent>
        <Sphere sphereArgs={[R/10,32,16,0,Math.PI*2,0,Math.PI]} position={[R,0,0]} metalness={.5} roughness={0}  materialArgs={{emissive:"#fff",emissiveIntensity:intensity}}
            onFrame={(mesh,state,delta)=>{
                angle.current += speed;
                mesh.position.y = Math.cos(angle.current) * R;
                mesh.position.x = Math.sin(angle.current) * R;
                if(angle.current >= 360) angle.current = 0;
            }}
        />
        <Torus torusArgs={[R,.01]} />

    </MeshComponent>
}

export default Planet