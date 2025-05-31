import type React from "react"
import type { CylinderGeometryArgs, DefaultGeometry, MeshEventHandlers } from "../Type"


interface CylinderInterface extends MeshEventHandlers, DefaultGeometry{
    args?:CylinderGeometryArgs
}

const Cylinder: React.FC<CylinderInterface> = ({
    args =[1,1,1,64],
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
            
            <cylinderGeometry args={args} ></cylinderGeometry>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </mesh>
    )

}

export default Cylinder