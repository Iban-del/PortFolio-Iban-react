import { useMemo } from "react"
import ParticleLine from "../Custom/ParticleLine"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import ParticleGroup from "../Custom/ParticleGroup"
import type { PagesProps } from "../Interface"
import CameraScroll from "../CameraScroll"
import Ground from "../Custom/Ground"
import ApplicationHook from "../../../hooks/ApplicationHook"



const Final  = ({
    position = 0,
    scrollState
}:PagesProps) =>{

    const {scrollValue} = ApplicationHook()

    return (
        <GroupComponent
            position={[-2,position+scrollValue.scrollStep-4,position+scrollValue.scrollStep+90]}
        >
            <CameraScroll coordinate={[0,position+scrollValue.scrollStep-2,-50]} coordinateDown={[0,position+scrollValue.scrollStep-2,-90]} stateScroll={scrollState}/>
            <TextComponent
                text="Welcome"
                color="#fff"
                
            />
            <Ground/>
                
        </GroupComponent>
    )

}



export default Final