import type React from "react"
import type { DefaultGeometry, MeshEventHandlers, RingGeometryArgs } from "../Type"


interface RingInterface extends MeshEventHandlers, DefaultGeometry{
    args?:RingGeometryArgs
}

const Ring: React.FC<RingInterface> = ({
    args = [],
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
            
            <ringGeometry args={args} ></ringGeometry>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </mesh>
    )

}

export default Ring