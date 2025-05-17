import Box from "../UI/Box"
import MeshComponent from "../UI/MeshComponent"

interface lineInterface {
    position?:[number,number,number],
    height?:number
}

const LineCustom = ({
    height = 2,
    position = [0,0,0]
}:lineInterface) =>{

    return <MeshComponent
        position={position}
    >
        <Box
            materialArgs={{emissive:"#fff",emissiveIntensity:90 }}
            color="#fff"
            boxArgs={[.02,height,.02]}
        />
    </MeshComponent>
}

export default LineCustom