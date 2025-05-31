import { useRef, type JSX } from "react"
import MeshComponent, { type MeshComponentInterface } from "../../UI/MeshComponent"
import Primitive from "../../UI/Primitive"
import type { Mesh } from "three"

const link = "/MoonSurface/scene.gltf"

interface moonSurfaceInterface extends MeshComponentInterface{
    position?:[number,number,number],
}

const MoonSurface = ({
    position = [0,0,0],
    ...props
}:moonSurfaceInterface) =>{

    const rocketRef = useRef<Mesh>(null)

    return <MeshComponent
        {...props}
        position={position}
    >
        <Primitive useTexture={true} ref={rocketRef} scale={1} link={link}></Primitive>

    </MeshComponent>
}

export default MoonSurface