import type React from "react"
import type { DefaultGeometry, SphereGeometryArgs } from "../Type"
import type { MeshComponentInterface } from "./MeshComponent"
import MeshComponent from "./MeshComponent"


interface SphereInterface extends MeshComponentInterface, DefaultGeometry{
    sphereArgs?:SphereGeometryArgs
}

const Sphere: React.FC<SphereInterface> = ({
    sphereArgs = [1,32,16,0,Math.PI*2,0,Math.PI],
    color = 'black',
    position = [0,0,0],
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) => {


    return (
        <MeshComponent
            {...propsEvent}
        >

            <sphereGeometry args={sphereArgs} ></sphereGeometry>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </MeshComponent>
    )

}

export default Sphere