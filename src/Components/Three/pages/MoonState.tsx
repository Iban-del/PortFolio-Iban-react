import { useEffect, useMemo, useRef } from "react"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import ParticleGroup from "../Custom/ParticleGroup"
import Rocket from "../Custom/Rocket"
import Astronaut from "../Custom/Astronaut"
import MoonSurface from "../Custom/MoonSurface"
import type { Mesh } from "three"
import Eart from "../Custom/Eart"


const MoonState = () =>{

    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])

    const astronautRef = useRef<Mesh>(null)

    useEffect(()=>{
        if(astronautRef.current){
            astronautRef.current.rotateY(90)
        }
    })

    return (
        <GroupComponent
            position={[0,-60,0]}
        >
            <pointLight intensity={1} position={[8,0,-7]}/>

            <Astronaut
                position={[0,-2,0]}
                ref={astronautRef}
            />

            <MoonSurface
                position={[0,-5,-10]}
            />

            <Rocket
                scale={9}
                position={[8,-2.2,-9]}
            />


            {particleGroup}
        </GroupComponent>
    )

}


export default MoonState