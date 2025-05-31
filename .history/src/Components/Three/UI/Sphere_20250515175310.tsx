import type React from "react"
import type { DefaultGeometry, MeshEventHandlers } from "../Type"


interface SphereInterface extends MeshEventHandlers, DefaultGeometry{

}

const Sphere: React.FC<SphereInterface> = ({
    size = [1,1,1],
    color = 'black',
    position = [0,0,0],
    onFrame,
    beforeRender,
    ...propsEvent
}) => {

    return (
        <mesh
            position={position}
            {...propsEvent}
        >

            <sphereGeometry></sphereGeometry>
            <meshBasicMaterial></meshBasicMaterial>
        </mesh>
    )

}

export default Sphere