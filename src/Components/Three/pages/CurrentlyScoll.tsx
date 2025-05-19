import { useMemo } from "react"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import ParticleGroup from "../Custom/ParticleGroup"
import Rocket from "../Custom/Rocket"


const CurrentlyScoll = () =>{

    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])


    return (
        <GroupComponent
            position={[0,-45,0]}
        >

            <Rocket R={2} position={[0,0,-1]}/>

            <TextComponent responsive={true} text="Lycéen" position={[0,-2,0]}/>

            {particleGroup}
            
                
        </GroupComponent>
    )

}


export default CurrentlyScoll