import { useRef } from "react"
import MeshComponent from "../UI/MeshComponent"
import Primitive from "../UI/Primitive"
import type { Mesh } from "three"

const link = "/Rocket/scene.gltf"

interface rocketInterface {
    position?:[number,number,number],
    R:number,
    speed?:number
}

const Rocket = ({
    R,
    speed = 0.005,
    position = [0,0,0],
}:rocketInterface) =>{

    const angle = useRef<number>(0);

    return <MeshComponent
        position={position}
        onFrame={(mesh,state,delta)=>{
                angle.current += speed;
                mesh.position.y = Math.cos(angle.current) * R;
                mesh.rotateZ(Math.cos(angle.current) * 0.01 > 0 ?Math.cos(angle.current) * 0.01:-Math.cos(angle.current) * 0.01)
                mesh.position.x = Math.sin(angle.current) * R;
        }}
    >
        <Primitive scale={1} link={link}></Primitive>

    </MeshComponent>
}

export default Rocket