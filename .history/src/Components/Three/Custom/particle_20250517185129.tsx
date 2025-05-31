import Box from "../UI/Box"
import MeshComponent from "../UI/MeshComponent"

interface particleInterface {

}

const Particle = ({

}) =>{

    

    return <MeshComponent>
        <Box
            materialArgs={{emissive:"#fff",emissiveIntensity:90 }}
            color="#fff"
            boxArgs={[sizeBox,sizeBox,sizeBox]}
        />
    </MeshComponent>
}

export default Particle