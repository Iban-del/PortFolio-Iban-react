import { useMemo } from "react"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import { topDown } from "../Annimation"
import ParticleGroup from "../Custom/ParticleGroup"
import SolarSystem from "../Custom/SolarSystem"


const systemSize = 1

const HowIAm = () =>{

    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])


    return (
        <GroupComponent
            position={[0,-15,0]}
        >
            <TextComponent responsive={true} text="Iban" position={[0,3,0]}/>
            <TextComponent responsive={true} text="Deletoille-Elizalde" position={[0,2,0]}/>

            {particleGroup}
            <SolarSystem  size={[systemSize,systemSize,systemSize]}/>
                
        </GroupComponent>
    )

}


export default HowIAm