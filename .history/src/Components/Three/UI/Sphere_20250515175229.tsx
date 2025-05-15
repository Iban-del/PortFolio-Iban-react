import type React from "react"
import type { DefaultGeometry, MeshEventHandlers } from "../Type"


interface SphereInterface extends MeshEventHandlers, DefaultGeometry{

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