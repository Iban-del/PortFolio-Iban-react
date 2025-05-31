import { useMemo } from "react"
import GroupComponent from "../UI/GroupComponent"
import ParticleGroup from "../Custom/ParticleGroup"
import type { PagesProps } from "../Core/Interface"
import ScrollStage from "../Scroll/ScrollStage"
import { useThreeUi } from "../../../context/ThreeUiContex"
import { ChangeSize, MoveTo } from "../Annimation/AnnimationCallback"
import { SCROLL_STEP } from "../../../Core/GlobalConstant"
import Spirale from "../Custom/Spirale"



const Final = ({
    position = 0,
}:PagesProps) =>{

    
    const {MainPlanet} = useThreeUi()
    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])

    return (
        <GroupComponent
            position={[0,position,-SCROLL_STEP]}
        >
            <ScrollStage coordinate={[0,position,-SCROLL_STEP+10]} stateScroll={6} onStage={()=>{
                if(MainPlanet.mesh.current){
                    ChangeSize(MainPlanet.mesh.current,1)
                    MoveTo([0,position,-SCROLL_STEP],MainPlanet.mesh.current)
                }
            }}/>
            <Spirale/>
            {particleGroup}
        </GroupComponent>
    )

}


export default Final