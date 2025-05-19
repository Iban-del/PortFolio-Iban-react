import { useRef, type JSX } from "react"
import MeshComponent, { type MeshComponentInterface } from "../UI/MeshComponent"
import Primitive from "../UI/Primitive"
import type { Mesh } from "three"

const link = "/Earth/scene.gltf"

interface eartSurfaceInterface extends MeshComponentInterface{
    position?:[number,number,number],
}

const Eart = ({
    position = [0,0,0],
    ...props
}:eartSurfaceInterface) =>{

    const rocketRef = useRef<Mesh>(null)

    return <MeshComponent
        {...props}
        position={position}
    >
        <Primitive ref={rocketRef} scale={1} link={link}></Primitive>

    </MeshComponent>
}

export default Eart