import { topDown } from "../Annimation"
import LineCustom from "../Custom/LineCustom"
import ParticleLine from "../Custom/ParticleLine"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"



const Home = () =>{

    return (
        <GroupComponent>
            <directionalLight position={[0,0,2]} color={"#17202a"} intensity={15} />
            <TextComponent
                text="Hello World"
                color="#fff"
                beforeRender={(mesh)=>{
                    //topDown({mesh})
                }}
            />
            
            <GroupComponent>

                <ParticleLine
                    position={[2,1,-1]}
                />
                
            </GroupComponent>
        </GroupComponent>
    )

}

export default Home