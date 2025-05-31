import { useMemo } from "react"
import ParticleLine from "../Custom/ParticleLine"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import ParticleGroup from "../Custom/ParticleGroup"
import type { PagesProps } from "../Core/Interface"
import ScrollStage from "../Scroll/ScrollStage"
import Wave from "../Custom/Wave"





const Home  = ({
    position = 0,
    scrollState
}:PagesProps) =>{

    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])



    return (
        <GroupComponent
            position={[0,position,0]}
        >
            <ScrollStage coordinate={[0,position,10]} stateScroll={scrollState}/>
            {/* <TextComponent text="Welcome" color="#fff"/>
            {particleGroup} */}

            
        </GroupComponent>
    )

}



export default Home