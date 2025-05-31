import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"



const Home = () =>{

    return (
        <GroupComponent>
            <directionalLight position={[0,0,2]} color={"#5d6d7e"} intensity={15} />
            <TextComponent
                text="Hello World"
                color="#67005b"
            />

            <GroupComponent>
                
            </GroupComponent>
        </GroupComponent>
    )

}

export default Home