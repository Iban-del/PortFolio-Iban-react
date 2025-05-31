import type React from "react"
import type { BoxGeometryArgs, MeshEventHandlers } from "../Type"
import type { Mesh } from "three"
import type { RootState } from "@react-three/fiber"


interface SphereInterface extends MeshEventHandlers {
    size?:BoxGeometryArgs,
    position?:[x: number, y: number, z: number]
    color?:string,
    onFrame?: (mesh:Mesh,state:RootState,delta:number) => void,
    beforeRender?:(mesh:Mesh) => void,
}

const Sphere: React.FC<SphereInterface> = ({
    ...propsEvent
}) => {

    return (
        <mesh
            {...propsEvent}
        >

            <sphereGeometry></sphereGeometry>
            <meshBasicMaterial></meshBasicMaterial>
        </mesh>
    )

}

export default Sphere