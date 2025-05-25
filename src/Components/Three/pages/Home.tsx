import { useMemo } from "react"
import ParticleLine from "../Custom/ParticleLine"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import { topDown } from "../Annimation"
import ParticleGroup from "../Custom/ParticleGroup"
import Primitive from "../UI/Primitive"
import type { PagesProps } from "../Interface"
import CameraScroll from "../CameraScroll"
import ApplicationHook from "../../../hooks/ApplicationHook"



const Home  = ({
    position = 0,
    scrollState
}:PagesProps) =>{

    const {scrollValue} = ApplicationHook()

    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])



    return (
        <GroupComponent
            position={[0,position,0]}
        >
            <CameraScroll coordinate={[0,position,10]} stateScroll={scrollState}/>
            <TextComponent
                text="Welcome"
                color="#fff"
                
            />

            {particleGroup}
            <GroupComponent>
                <ParticleLine position={[4,-4,-3]}/>
                <ParticleLine position={[-4,-6,-4]}/>
            </GroupComponent>

            {/* <Primitive  scale={0.1} position={[0,0,9]} link="/Astronaut/scene.gltf"></Primitive> */}
                
        </GroupComponent>
    )

}



export default Home