import type React from "react"
import type { DefaultGeometry, TubeGeometryArgs } from "../Core/Type"
import type { MeshComponentInterface } from "./MeshComponent"
import MeshComponent from "./MeshComponent"


interface TubeInterface extends MeshComponentInterface, DefaultGeometry{
    tubeArgs:TubeGeometryArgs
}

const Tube: React.FC<TubeInterface> = ({
    tubeArgs,
    materialArgs,
    color = '#fff',
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) => {
    

    return (
        <MeshComponent
            {...propsEvent}
        >
            <tubeGeometry args={tubeArgs} ></tubeGeometry>
            <meshStandardMaterial {...materialArgs} color={color} metalness={metalness} roughness={roughness}  ></meshStandardMaterial>
        </MeshComponent>
    )

}

export default Tube