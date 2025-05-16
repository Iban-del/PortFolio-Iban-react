import type React from "react"
import type { ConeGeometryArgs, DefaultGeometry } from "../Type"
import type { MeshComponentInterface } from "./MeshComponent"
import MeshComponent from "./MeshComponent"



interface ConeInterface extends MeshComponentInterface, DefaultGeometry{
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
        <MeshComponent
            {...propsEvent}
        >
            
            <coneGeometry args={coneArgs} ></coneGeometry>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </MeshComponent>
    )

}

export default Cone