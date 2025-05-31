import Box from "../UI/Box"
import MeshComponent from "../UI/MeshComponent"

interface particleInterface {
    position?:[number,number,number]
}

const Particle = ({
    position = [0,0,0]
}:particleInterface) =>{

    return <MeshComponent
        position={position}
    >
        <Box
            materialArgs={{emissive:"#fff",emissiveIntensity:9 }}
            color="#fff"
            boxArgs={[.1,.1,.1]}
        />
    </MeshComponent>
}

export default Particle