import type React from "react"
import type { ConeGeometryArgs, DefaultGeometry, MeshEventHandlers } from "../Type"



interface ConeInterface extends MeshEventHandlers, DefaultGeometry{
    coneArgs?:ConeGeometryArgs
}

const Cone: React.FC<ConeInterface> = ({
    coneArgs =[1,2],
    color = 'black',
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) => {

    

    return (
        <mesh
            position={position}
            {...propsEvent}
        >
            
            <coneGeometry args={coneArgs} ></coneGeometry>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </mesh>
    )

}

export default Cone