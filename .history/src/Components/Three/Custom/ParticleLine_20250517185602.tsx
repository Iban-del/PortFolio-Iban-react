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

    </MeshComponent>
}

export default Particle