import { useRef, type JSX } from "react"
import MeshComponent, { type MeshComponentInterface } from "../../UI/MeshComponent"
import Primitive from "../../UI/Primitive"
import type { Mesh } from "three"

const link = "/Ground/scene.gltf"

interface rocketInterface extends MeshComponentInterface{
    position?:[number,number,number],
}

const Ground = ({
    position = [0,0,0],
    ...props
}:rocketInterface) =>{

    const rocketRef = useRef<Mesh>(null)

    return <MeshComponent
        {...props}
        position={position}
    >
        <Primitive useTexture={true} ref={rocketRef} scale={1} link={link}></Primitive>

    </MeshComponent>
}

export default Ground