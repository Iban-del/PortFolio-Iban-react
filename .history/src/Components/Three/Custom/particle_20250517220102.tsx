import type { BoxGeometryArgs } from "../Type"
import Box from "../UI/Box"
import MeshComponent from "../UI/MeshComponent"

interface particleInterface {
    position?:[number,number,number]
    boxArgs?:BoxGeometryArgs,
}

const Particle = ({
    position = [0,0,0],
    boxArgs = [.2,.2,.2]
}:particleInterface) =>{

    return <MeshComponent
        position={position}
    >
        <Box
            materialArgs={{emissive:"#fff",emissiveIntensity:1 }}
            color="#fff"
            boxArgs={boxArgs}
        />
    </MeshComponent>
}

export default Particle