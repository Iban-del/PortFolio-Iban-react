import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import type { PagesProps } from "../Interface"
import CameraScroll from "../CameraScroll"
import Ground from "../Custom/Ground"
import ApplicationHook from "../../../hooks/ApplicationHook"
import Sphere from "../UI/Sphere"




const Final  = ({
    position = 0,
    scrollState
}:PagesProps) =>{

    const {scrollValue} = ApplicationHook()

    return (
        <GroupComponent
            position={[-2,position+scrollValue.scrollStep-4,position+scrollValue.scrollStep+90]}
        >
            <CameraScroll coordinate={[0,position+scrollValue.scrollStep-2,-50]} stateScroll={scrollState}/>
            <CameraScroll coordinate={[0,position+scrollValue.scrollStep-2,-90]} stateScroll={scrollState+1}/>
            <TextComponent
                text="Welcome"
                color="#fff"
                
            />
            <Sphere materialArgs={{emissive:"#fff",emissiveIntensity:1}} position={[+2,4,0]} />
            <Ground/>
                
        </GroupComponent>
    )

}



export default Final