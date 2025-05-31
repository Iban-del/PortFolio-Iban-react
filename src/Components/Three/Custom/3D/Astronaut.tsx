import { useRef, type JSX } from "react"
import MeshComponent, { type MeshComponentInterface } from "../../UI/MeshComponent"
import Primitive from "../../UI/Primitive"
import type { Mesh } from "three"

const link = "/Astronaut/scene.gltf"

interface astronautInterface extends MeshComponentInterface{
    position?:[number,number,number],
}

const Astronaut = ({
    position = [0,0,0],
    ...props
}:astronautInterface) =>{

    const rocketRef = useRef<Mesh>(null)

    return <MeshComponent
        {...props}
        position={position}
    >
        <Primitive ref={rocketRef} scale={1} link={link}></Primitive>

    </MeshComponent>
}

export default Astronaut