import type { HTMLMesh } from "three/examples/jsm/Addons.js"



const Box = (props:HTMLMesh) =>{

    return (
        <mesh
            {...props}
        >
            <boxGeometry> </boxGeometry>
            <meshBasicMaterial color='hotpink' ></meshBasicMaterial>
        </mesh>
    )

}

export default Box