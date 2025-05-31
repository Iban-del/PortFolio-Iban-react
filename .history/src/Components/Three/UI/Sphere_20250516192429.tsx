import type React from "react"
import type { DefaultGeometry, MeshEventHandlers, SphereGeometryArgs } from "../Type"


interface SphereInterface extends MeshEventHandlers, DefaultGeometry{
    args?:SphereGeometryArgs
}

const Sphere: React.FC<SphereInterface> = ({
    args = [1,32,16,0,Math.PI*2,0,Math.PI],
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

            <sphereGeometry args={args} ></sphereGeometry>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </mesh>
    )

}

export default Sphere