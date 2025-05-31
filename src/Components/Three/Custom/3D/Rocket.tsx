import { useRef, type JSX } from "react"
import MeshComponent, { type MeshComponentInterface } from "../../UI/MeshComponent"
import Primitive from "../../UI/Primitive"
import type { Mesh } from "three"
import Smoke from "../Smoke"

const link = "/Rocket/scene.gltf"

interface rocketInterface extends MeshComponentInterface{
    position?:[number,number,number],
}

const Rocket = ({
    position = [0,0,0],
    ...props
}:rocketInterface) =>{

    const rocketRef = useRef<Mesh>(null)

    return <MeshComponent
        {...props}
        position={position}
    >
        <Primitive ref={rocketRef} scale={1} link={link}></Primitive>
    </MeshComponent>
}

export default Rocket