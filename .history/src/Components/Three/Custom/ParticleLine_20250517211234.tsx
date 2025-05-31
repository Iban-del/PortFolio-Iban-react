import { useRef } from "react"
import MeshComponent from "../UI/MeshComponent"
import LineCustom from "./LineCustom"
import Particle from "./Particle"
import type { Mesh } from "three"

interface particleLineInterface {
    position?:[number,number,number]
}

const ParticleLine = ({
    position = [0,0,0]
}:particleLineInterface) =>{

    const lineRef = useRef<Mesh>(null)

    return <MeshComponent
        position={position}
    >
        <LineCustom
            height={0.5}
            position={[0,0,0]}
        />
        <Particle
            
        />
    </MeshComponent>
}

export default ParticleLine