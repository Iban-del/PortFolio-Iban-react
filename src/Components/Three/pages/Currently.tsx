import { useMemo, useRef } from "react"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import ParticleGroup from "../Custom/ParticleGroup"
import Sphere from "../UI/Sphere"
import Rocket from "../Custom/Rocket"
import type { PagesProps } from "../Interface"
import CameraScroll from "../CameraScroll"
import { useThree } from "@react-three/fiber"
import ApplicationHook from "../../../hooks/ApplicationHook"


const Currently = ({
    position = 0,
    scrollState
}:PagesProps) =>{
    const speed = 0.005;
    const R = 2;
    const {scrollValue} = ApplicationHook()

    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])

    const angle = useRef<number>(0);

    return (
        <GroupComponent
            position={[0,position,0]}
        >
            <CameraScroll coordinate={[0,position,10]} coordinateDown={[0,position-scrollValue.scrollStep,10]} stateScroll={scrollState}/>
            <Sphere materialArgs={{emissive:"#fff",emissiveIntensity:1}} />

            <Rocket
                position={[0,0,-1]}
                onFrame={(mesh,state,delta)=>{
                    angle.current += speed;
                    mesh.position.y = Math.cos(angle.current) * R;
                    mesh.rotateZ(Math.cos(angle.current) * 0.01 > 0 ?Math.cos(angle.current) * 0.01:-Math.cos(angle.current) * 0.01)
                    mesh.position.x = Math.sin(angle.current) * R;
                }}
            />

            <TextComponent responsive={true} text="Développeur" position={[0,-2,0]}/>
            <TextComponent responsive={true} text="d'application" position={[0,-3,0]}/>

            {particleGroup}
            
                
        </GroupComponent>
    )

}


export default Currently