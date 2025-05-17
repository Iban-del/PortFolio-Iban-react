import { Color } from "three"
import { topDown } from "../Annimation"
import Box from "../UI/Box"
import GroupComponent from "../UI/GroupComponent"
import RectAreaLight from "../UI/RectAreaLight"
import TextComponent from "../UI/Text"
import Particle from "../Custom/particle"



const Home = () =>{

    return (
        <GroupComponent>
            <directionalLight position={[0,0,2]} color={"#17202a"} intensity={15} />
            <TextComponent
                text="Hello World"
                color="#fff"
                beforeRender={(mesh)=>{
                    topDown({mesh})
                }}
            />
            
            <GroupComponent>

                <Particle/>
                
            </GroupComponent>
        </GroupComponent>
    )

}

export default Home