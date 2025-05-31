import type React from "react"
import type { ConeGeometryArgs, DefaultGeometry, MeshEventHandlers } from "../Type"



interface ConeInterface extends MeshEventHandlers, DefaultGeometry{
    args?:ConeGeometryArgs
}

const Cone: React.FC<ConeInterface> = ({
    args =[1,2],
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
            
            <coneGeometry args={args} ></coneGeometry>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </mesh>
    )

}

export default Cone