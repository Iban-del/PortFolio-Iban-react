import type React from "react"
import type { CylinderGeometryArgs, DefaultGeometry, MeshEventHandlers } from "../Type"


interface CylinderInterface extends MeshEventHandlers, DefaultGeometry{
    cylinderArgs?:CylinderGeometryArgs
}

const Cylinder: React.FC<CylinderInterface> = ({
    cylinderArgs =[1,1,1,64],
    color = 'black',
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) => {

    return (
        <mesh
            {...propsEvent}
        >
            
            <cylinderGeometry args={cylinderArgs} ></cylinderGeometry>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </mesh>
    )

}

export default Cylinder