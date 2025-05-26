import { useMemo } from "react"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import ParticleGroup from "../Custom/ParticleGroup"
import SolarSystem from "../Custom/SolarSystem"
import type { PagesProps } from "../Interface"
import CameraScroll from "../CameraScroll"



const systemSize = 1

const HowIAm = ({
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
            
            <CameraScroll coordinate={[0,position,10]} stateScroll={scrollState}/>
            <TextComponent responsive={true} text="Iban" position={[0,3,0]}/>
            <TextComponent responsive={true} text="Deletoille-Elizalde" position={[0,2,0]}/>

            {particleGroup}
            <SolarSystem size={[systemSize,systemSize,systemSize]}/>
                
        </GroupComponent>
    )

}


export default HowIAm