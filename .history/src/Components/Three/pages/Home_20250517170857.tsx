import { topDown } from "../Annimation"
import Box from "../UI/Box"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"



const Home = () =>{

    return (
        <GroupComponent>
            <directionalLight position={[0,0,2]} color={"#17202a"} intensity={15} />
            <TextComponent
                text="H"
                color="#fff"
                beforeRender={(mesh)=>{
                        topDown({mesh})
                    }}
            />

            <GroupComponent>
                <Box
                    position={[1,1,1]}
                    color="#fff"
                />
            </GroupComponent>
        </GroupComponent>
    )

}

export default Home