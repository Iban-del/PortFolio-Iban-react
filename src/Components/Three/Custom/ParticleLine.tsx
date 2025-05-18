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
        <LineCustom
            height={0.5}
            position={[0,0.2,0]}
        />
        <Particle
            
        />
    </MeshComponent>
}

export default ParticleLine