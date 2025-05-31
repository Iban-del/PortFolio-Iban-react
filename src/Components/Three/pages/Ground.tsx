import GroupComponent from "../UI/GroupComponent"
import type { PagesProps } from "../Core/Interface"
import ScrollStage from "../Scroll/ScrollStage"
import { useThreeUi } from "../../../context/ThreeUiContex"
import Gr from "../Custom/3D/Ground";





const Ground = ({
    position = 0,
    scrollState
}:PagesProps) =>{

    
    const {MainPlanet} = useThreeUi()


    return (
        <GroupComponent
            position={[0,position*2,0]}
        >
            
            <ScrollStage coordinate={[0,position*2,10]} stateScroll={4} onStage={()=>{
                
            }}/>
            <Gr position={[0,-5,-15]}/>
            
            
        </GroupComponent>
    )

}


export default Ground