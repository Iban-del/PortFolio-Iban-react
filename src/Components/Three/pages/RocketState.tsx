import { useMemo, useRef } from "react"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import ParticleGroup from "../Custom/ParticleGroup"
import Rocket from "../Custom/Rocket"
import Astronaut from "../Custom/Astronaut"


const RocketState = () =>{
    const speed = 0.005;
    const R = 3.5;

    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])

    const angle = useRef<number>(0);

    return (
        <GroupComponent
            position={[0,-45,0]}
        >
            <Rocket scale={9} position={[0,-2,0]}/>
            <Astronaut 
                scale={0.5} 
                onFrame={(mesh,state,delta)=>{
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