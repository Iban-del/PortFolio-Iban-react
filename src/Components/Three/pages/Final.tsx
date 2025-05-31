import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import type { PagesProps } from "../Core/Interface"
import ScrollStage from "../Scroll/ScrollStage"
import Ground from "../Custom/3D/Ground"
import ApplicationHook from "../../../hooks/ApplicationHook"
import Sphere from "../UI/Sphere"
import { SCROLL_STEP } from "../../../Core/GlobalConstant"




const Final  = ({
    position = 0,
    scrollState
}:PagesProps) =>{

    const {scrollValue} = ApplicationHook()

    return (
        <GroupComponent
            position={[-2,position+scrollValue.scrollStep-4,position+scrollValue.scrollStep+90]}
        >
            <ScrollStage coordinate={[0,position+SCROLL_STEP-2,-SCROLL_STEP]} stateScroll={scrollState}/>
            <ScrollStage coordinate={[0,position+SCROLL_STEP-2,-SCROLL_STEP-12]} stateScroll={scrollState+1}/>
            <TextComponent
                text="Welcome"
                color="#fff"
                
            />
            <Sphere materialArgs={{emissive:"#fff",emissiveIntensity:1}} position={[+2,4,0]} />
            {/* <Ground position={[0,1,-SCROLL_STEP*3]}/> */}
                
        </GroupComponent>
    )

}



export default Final