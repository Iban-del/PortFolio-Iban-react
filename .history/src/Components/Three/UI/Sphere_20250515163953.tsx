import type React from "react"
import type { MeshEventHandlers } from "../Type"


interface SphereInterface extends MeshEventHandlers {

}

const Sphere: React.FC<SphereInterface> = ({
    ...propsEvent
}) => {

    return (
        <mesh>

            <sphereGeometry></sphereGeometry>
            <meshBasicMaterial></meshBasicMaterial>
        </mesh>
    )

}

export default Sphere