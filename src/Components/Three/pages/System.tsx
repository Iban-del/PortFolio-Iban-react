import { useMemo } from "react"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import ParticleGroup from "../Custom/ParticleGroup"
import SolarSystem from "../Custom/SolarSystem"
import type { PagesProps } from "../Core/Interface"
import ScrollStage from "../Scroll/ScrollStage"
import { useThreeUi } from "../../../context/ThreeUiContex"
import { ChangeSize, MoveTo } from "../Annimation/AnnimationCallback"
import { SCROLL_STEP } from "../../../Core/GlobalConstant"




const systemSize = 1

const System = ({
    position = 0,
}:PagesProps) =>{

    
    const {MainPlanet} = useThreeUi()
    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])

    return (
        <GroupComponent
            position={[0,-SCROLL_STEP,position]}
        >
            
            <ScrollStage coordinate={[0,-SCROLL_STEP,position+10]} stateScroll={3} onStage={()=>{
                if(MainPlanet.mesh.current){
                    ChangeSize(MainPlanet.mesh.current,1)
                    MoveTo([0,-SCROLL_STEP,position],MainPlanet.mesh.current)
                }
            }}/>

            <ScrollStage coordinate={[0,-SCROLL_STEP,position+2]} stateScroll={4} onStage={()=>{
                if(MainPlanet.mesh.current){
                    ChangeSize(MainPlanet.mesh.current,1)
                    MoveTo([0,-SCROLL_STEP,position],MainPlanet.mesh.current)
                }
            }}/>
            
            <TextComponent responsive={true} text="Iban" position={[0,3,0]}/>
            <TextComponent responsive={true} text="Deletoille-Elizalde" position={[0,2,0]}/>

            {particleGroup}
            <SolarSystem size={[systemSize,systemSize,systemSize]}/>
                
        </GroupComponent>
    )

}


export default System