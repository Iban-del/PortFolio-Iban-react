import type React from "react"
import type { DefaultGeometry, TubeGeometryArgs } from "../Type"
import type { MeshComponentInterface } from "./MeshComponent"


interface TubeInterface extends MeshComponentInterface, DefaultGeometry{
    args:TubeGeometryArgs
}

const Tube: React.FC<TubeInterface> = ({
    args,
    color = 'black',
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) => {
    

    return (
        <mesh
            {...propsEvent}
        >
            
            <tubeGeometry args={args} ></tubeGeometry>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </mesh>
    )

}

export default Tube