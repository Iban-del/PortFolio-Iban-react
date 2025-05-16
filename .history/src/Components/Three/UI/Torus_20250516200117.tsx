import type React from "react"
import type { DefaultGeometry, TorusGeometryArgs } from "../Type"
import type { MeshComponentInterface } from "./MeshComponent"

interface TorusInterface extends MeshComponentInterface,DefaultGeometry{
    torusArgs?:TorusGeometryArgs
}

const Torus: React.FC<TorusInterface> = ({
    torusArgs = [],
    color = 'black',
    metalness = 0.9,
    roughness = 0.5,

}) => {

    return (
        <mesh
        >
            
            <torusGeometry args={torusArgs} ></torusGeometry>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </mesh>
    )

}

export default Torus