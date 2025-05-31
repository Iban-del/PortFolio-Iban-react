import Box from "../UI/Box"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"



const Home = () =>{

    return (
        <GroupComponent>
            <directionalLight position={[0,0,2]} color={"#fff"} intensity={9} />
            <TextComponent
                text="Hello World"
                color="#fff"
            />

            <GroupComponent>
                <Box/>
            </GroupComponent>
        </GroupComponent>
    )

}

export default Home