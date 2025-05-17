import { topDown } from "../Annimation"
import Box from "../UI/Box"
import GroupComponent from "../UI/GroupComponent"
import RectAreaLight from "../UI/RectAreaLight"
import TextComponent from "../UI/Text"


const sizeBox = 10*Math.pow(10,0)


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
                <RectAreaLight position={[0,0,0]}></RectAreaLight>
                <Box
                    position={[0,0,0]}
                    color="#fff"
                    boxArgs={[1,1,1]}
                />
            </GroupComponent>
        </GroupComponent>
    )

}

export default Home