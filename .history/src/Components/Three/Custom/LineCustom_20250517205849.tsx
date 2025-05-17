import Box from "../UI/Box"
import MeshComponent from "../UI/MeshComponent"

interface lineInterface {
    position?:[number,number,number],
    height?:number
}

const LineCustom = ({
    height = 1,
    position = [0,0,0]
}:lineInterface) =>{



    return <MeshComponent
        responsive={false}
        position={position}
    >
        <Box
            responsive={false}
            materialArgs={{emissive:"#fff",emissiveIntensity:9 }}
            color="#fff"
            boxArgs={[.02,height,.02]}
        />
    </MeshComponent>
}

export default LineCustom