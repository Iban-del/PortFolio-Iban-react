import type React from "react"


interface SphereInterface {

}

const Sphere: React.FC<SphereInterface> = ({

}) => {

    return (
        <mesh>

            <sphereGeometry></sphereGeometry>
            <meshBasicMaterial></meshBasicMaterial>
        </mesh>
    )

}

export default Sphere