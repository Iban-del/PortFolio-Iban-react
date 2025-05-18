import { useMemo } from "react"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import { topDown } from "../Annimation"
import ParticleGroup from "../Custom/ParticleGroup"
import SolarSystem from "../Custom/SolarSystem"
import Sphere from "../UI/Sphere"
import Rocket from "../Custom/Rocket"



const systemSize = 1

const Currently = () =>{

    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])


    return (
        <GroupComponent
            position={[0,-30,0]}
            beforeRender={(group)=>{
                topDown({component:group,delta:0.1,ease:"power1.inOut",duration:1})
            }}
        >

            <Sphere materialArgs={{emissive:"#fff",emissiveIntensity:1}}  />
            <Rocket R={2} position={[0,0,-1]}/>

            <TextComponent responsive={true} text="Développeur" position={[0,-2,0]}/>
            <TextComponent responsive={true} text="d'application" position={[0,-3,0]}/>

            {particleGroup}
            
                
        </GroupComponent>
    )

}


export default Currently