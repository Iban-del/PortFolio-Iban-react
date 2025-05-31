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
            boxArgs={[1,.1,1]}
        />
    </MeshComponent>
}

export default Particle