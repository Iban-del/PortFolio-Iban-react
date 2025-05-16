import type React from "react"
import type { DefaultGeometry, MeshEventHandlers, TubeGeometryArgs } from "../Type"


interface TubeInterface extends MeshEventHandlers, DefaultGeometry{
    args:TubeGeometryArgs
}

const Tube: React.FC<TubeInterface> = ({
    args,
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
            
            <tubeGeometry args={args} ></tubeGeometry>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </mesh>
    )

}

export default Tube