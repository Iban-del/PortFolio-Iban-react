import type React from "react"
import type { DefaultGeometry, RingGeometryArgs } from "../Type"
import type { MeshComponentInterface } from "./MeshComponent"


interface RingInterface extends MeshComponentInterface, DefaultGeometry{
    ringArgs?:RingGeometryArgs
}

const Ring: React.FC<RingInterface> = ({
    ringArgs = [],
    color = 'black',
    position = [0,0,0],
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) => {

    return (
        <mesh
            position={position}
            {...propsEvent}
        >
            
            <ringGeometry args={ringArgs} ></ringGeometry>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </mesh>
    )

}

export default Ring