import GroupComponent from "../UI/GroupComponent"
import type { PagesProps } from "../Core/Interface"
import ScrollStage from "../Scroll/ScrollStage"
import { useMemo } from "react";
import ParticleGroup from "../Custom/ParticleGroup";
import Gl from "../Custom/Galaxy";
import MeshComponent from "../UI/MeshComponent";
import Smoke from "../Custom/Smoke";
import ApplicationHook from "../../../hooks/ApplicationHook";
import TextComponent from "../UI/Text";






const Galaxy = ({
    position = 0,
}:PagesProps) =>{
    const {scrollValue} = ApplicationHook()
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
            <MeshComponent position={[0,0,-15]}>
                <Smoke delta={9} />
                {particleGroup}
                {scrollValue.state == 2 &&
                    <MeshComponent>
                        <TextComponent position={[0,0,-2]} text="Apprenti" color="#fff"/>
                        <TextComponent position={[0,-1,-2]} text="Développeur" color="#fff"/>
                    </MeshComponent>
                }
            </MeshComponent>
            
            
        </GroupComponent>
    )

}


export default Galaxy