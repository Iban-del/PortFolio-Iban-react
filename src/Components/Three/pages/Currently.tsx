import { useMemo, useRef } from "react"
import GroupComponent from "../UI/GroupComponent"
import ParticleGroup from "../Custom/ParticleGroup"
import type { PagesProps } from "../Core/Interface"
import ScrollStage from "../Scroll/ScrollStage"
import { useThreeUi } from "../../../context/ThreeUiContex"
import { ChangeSize, MoveTo } from "../Annimation/AnnimationCallback"
import Wave from "../Custom/Wave"
import MoonSurface from "../Custom/3D/MoonSurface"
import Astronaut from "../Custom/3D/Astronaut"
import Sphere from "../UI/Sphere"



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
                    ChangeSize(MainPlanet.mesh.current,2.5)
                    MoveTo([0,position,0],MainPlanet.mesh.current)
                }
            }} />

            <Sphere sphereArgs={[3,32,16,0,Math.PI*2,0,Math.PI]}  position={[0,0,0]}  materialArgs={{opacity:0.5,transparent:true}}/>
            <Sphere sphereArgs={[1.1,32,16,0,Math.PI*2,0,Math.PI]}  position={[0,0,0.5]}  materialArgs={{opacity:0.5}}/>
            {particleGroup}
            
                
        </GroupComponent>
    )

}


export default Currently