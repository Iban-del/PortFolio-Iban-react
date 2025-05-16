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
                onFrame={()=>{
                    
                }}
            />

            <GroupComponent>
                <Box
                    color="#fff"
                    position={[1,1,1]}
                />
            </GroupComponent>
        </GroupComponent>
    )

}

export default Home