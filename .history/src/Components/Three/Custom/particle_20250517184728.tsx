import Box from "../UI/Box"
import MeshComponent from "../UI/MeshComponent"

interface particleInterface {

}

const Particle = ({
const sizeBox = 10*Math.pow(10,-2)
}) =>{
    return <MeshComponent>
        <Box
            materialArgs={{emissive:"#fff",emissiveIntensity:90 }}
            position={[1,1,1]}
            color="#fff"
            boxArgs={[sizeBox,sizeBox,sizeBox]}
        />
    </MeshComponent>
}

export default Particle