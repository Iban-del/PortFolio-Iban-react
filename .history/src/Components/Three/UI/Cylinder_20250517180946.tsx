import type React from "react"
import type { CylinderGeometryArgs, DefaultGeometry } from "../Type"
import type { MeshComponentInterface } from "./MeshComponent"
import MeshComponent from "./MeshComponent"


interface CylinderInterface extends MeshComponentInterface, DefaultGeometry{
    cylinderArgs?:CylinderGeometryArgs
}

const Cylinder: React.FC<CylinderInterface> = ({
    cylinderArgs =[1,1,1,64],
    color = '#fff',
    materialArgs,
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) => {

    return (
        <MeshComponent
            {...propsEvent}
        >
            <cylinderGeometry args={cylinderArgs} ></cylinderGeometry>
            <meshStandardMaterial {...materialArgs} color={color} emissive={color} metalness={metalness} roughness={roughness}  ></meshStandardMaterial>
        </MeshComponent>
    )

}

export default Cylinder