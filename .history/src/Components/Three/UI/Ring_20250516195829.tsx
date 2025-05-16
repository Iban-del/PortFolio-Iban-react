import type React from "react"
import type { DefaultGeometry, RingGeometryArgs } from "../Type"
import type { MeshComponentInterface } from "./MeshComponent"
import MeshComponent from "./MeshComponent"


interface RingInterface extends MeshComponentInterface, DefaultGeometry{
    ringArgs?:RingGeometryArgs
}

const Ring: React.FC<RingInterface> = ({
    ringArgs = [],
    color = 'black',
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) => {

    return (
        <MeshComponent
            {...propsEvent}
        >
            <ringGeometry args={ringArgs} ></ringGeometry>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </MeshComponent>
    )

}

export default Ring