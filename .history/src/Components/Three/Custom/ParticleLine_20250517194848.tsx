import MeshComponent from "../UI/MeshComponent"
import LineCustom from "./LineCustom"
import Particle from "./Particle"

interface particleLineInterface {
    position?:[number,number,number]
}

const ParticleLine = ({
    position = [0,0,0]
}:particleLineInterface) =>{

    return <MeshComponent
        position={position}
    >
        <LineCustom/>
        <Particle/>
    </MeshComponent>
}

export default ParticleLine