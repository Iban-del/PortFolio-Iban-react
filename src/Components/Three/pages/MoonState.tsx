import { useEffect, useMemo, useRef } from "react"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import ParticleGroup from "../Custom/ParticleGroup"
import Rocket from "../Custom/Rocket"
import Astronaut from "../Custom/Astronaut"
import MoonSurface from "../Custom/MoonSurface"
import type { Mesh } from "three"
import type { PagesProps } from "../Interface"
import CameraScroll from "../CameraScroll"
import ApplicationHook from "../../../hooks/ApplicationHook"


const MoonState = ({
    position = 0,
    scrollState
}:PagesProps) =>{
    const astronautRef = useRef<Mesh>(null)


    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])

    
    

    useEffect(()=>{
        if(astronautRef.current){
            astronautRef.current.rotateY(90)
        }
    },[])

    return (
        <GroupComponent
            position={[0,position,0]}
        >   
            <CameraScroll coordinate={[0,position,10]} stateScroll={scrollState}/>
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