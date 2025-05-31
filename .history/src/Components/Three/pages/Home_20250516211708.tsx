import Box from "../UI/Box"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"



const Home = () =>{

    return (
        <GroupComponent>
            <directionalLight position={[0,0,2]} color={"#5d6d7e"} intensity={9} />
            <TextComponent
                text="Hello World"
                color="#fff"
            />

            <GroupComponent>
                <Box
                    color="#fff"
                    metalness={1}
                    position={[1,1,1]}                    
                />
            </GroupComponent>
        </GroupComponent>
    )

}

export default Home