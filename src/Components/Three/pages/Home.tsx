import { useMemo } from "react"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import ParticleGroup from "../Custom/ParticleGroup"
import type { PagesProps } from "../Core/Interface"
import ScrollStage from "../Scroll/ScrollStage"
import Smoke from "../Custom/Smoke"





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
            <ScrollStage coordinate={[0,position,10]} stateScroll={0}/>
            <TextComponent text="Welcome" color="#fff"/>
            <Smoke position={[0,0,-1]} opacity={1} color="#fff" />
            {particleGroup}
            
        </GroupComponent>
    )

}



export default Home