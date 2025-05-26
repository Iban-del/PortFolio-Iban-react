import { useMemo, useRef } from "react"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import ParticleGroup from "../Custom/ParticleGroup"
import Sphere from "../UI/Sphere"
import Rocket from "../Custom/Rocket"
import type { PagesProps } from "../Core/Interface"
import ScrollStage from "../Scroll/ScrollStage"
import { useThreeUi } from "../../../context/ThreeUiContex"
import { MoveTo } from "../Annimation/AnnimationCallback"


const Currently = ({
    position = 0,
    scrollState
}:PagesProps) =>{
    const speed = 0.005;
    const R = 2;

    const {MainPlanet} = useThreeUi()
    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])

    const angle = useRef<number>(0);

    return (
        <GroupComponent
            position={[0,position,0]}
        >
            <ScrollStage coordinate={[0,position,10]} stateScroll={scrollState} onStage={()=>{
                
                if(MainPlanet.mesh.current){
                    MoveTo([0,-80,0],MainPlanet.mesh.current)
                }
            }} />
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