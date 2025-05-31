import { useMemo, useRef } from "react"
import GroupComponent from "../UI/GroupComponent"
import ParticleGroup from "../Custom/ParticleGroup"
import Rocket from "../Custom/3D/Rocket"
import Astronaut from "../Custom/3D/Astronaut"
import type { PagesProps } from "../Core/Interface"
import ScrollStage from "../Scroll/ScrollStage"


const RocketState = ({
    position = 0,
    scrollState
}:PagesProps) =>{
    const speed = 0.005;
    const R = 3.5;


    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])

    const angle = useRef<number>(0);

    return (
        <GroupComponent
            position={[0,position,0]}
        >
            <ScrollStage coordinate={[0,position,10]} stateScroll={scrollState}/>
            <Rocket scale={9} position={[0,-2,0]}/>
            <Astronaut 
                scale={0.5} 
                onFrame={async (mesh,state,delta)=>{
                    angle.current += speed;
                    mesh.position.y = Math.cos(angle.current) * R;
                    mesh.rotateZ(Math.cos(angle.current) * 0.01 > 0 ?Math.cos(angle.current) * 0.01:-Math.cos(angle.current) * 0.01)
                    mesh.position.z = Math.sin(angle.current) * R;
                    mesh.position.x = Math.cos(angle.current) * R;
                }}
            />

            {particleGroup}
        </GroupComponent>
    )

}


export default RocketState