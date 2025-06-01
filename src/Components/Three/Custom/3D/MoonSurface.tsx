import { useRef } from "react"
import MeshComponent, { type MeshComponentInterface } from "../../UI/MeshComponent"
import Primitive from "../../UI/Primitive"
import type { Mesh } from "three"


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
        <Primitive useTexture={true} ref={rocketRef} scale={1} link={import.meta.env.BASE_URL + 'MoonSurface/scene.gltf'}></Primitive>

    </MeshComponent>
}

export default MoonSurface