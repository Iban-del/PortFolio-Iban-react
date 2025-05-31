import Box from "../UI/Box"
import MeshComponent from "../UI/MeshComponent"

interface lineInterface {
    position?:[number,number,number]
}

const LineCustom = ({
    position = [0,0,0]
}:lineInterface) =>{

    return <MeshComponent
        position={position}
    >
        <Box
            materialArgs={{emissive:"#fff",emissiveIntensity:90 }}
            color="#fff"
            boxArgs={[.03,.1,.03]}
        />
    </MeshComponent>
}

export default LineCustom