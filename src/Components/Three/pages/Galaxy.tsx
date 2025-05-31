import GroupComponent from "../UI/GroupComponent"
import type { PagesProps } from "../Core/Interface"
import ScrollStage from "../Scroll/ScrollStage"
import { useMemo } from "react";
import ParticleGroup from "../Custom/ParticleGroup";
import Gl from "../Custom/Galaxy";






const Galaxy = ({
    position = 0,
}:PagesProps) =>{
    
    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])

    return (
        <GroupComponent
            position={[0,position,0]}
        >
            
            <ScrollStage coordinate={[0,position,10]} stateScroll={1} onStage={()=>{}}/>
            <ScrollStage coordinate={[0,position,-1]} stateScroll={2} onStage={()=>{}}/>
            <Gl/>
            {particleGroup}
            
            
        </GroupComponent>
    )

}


export default Galaxy