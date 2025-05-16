import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"



const Home = () =>{

    return (
        <GroupComponent>
            <directionalLight position={[0,0,2]} color={"#17202a"} intensity={15} />
            <TextComponent
                text="Hello World"
                color="#fff"
            />

            <GroupComponent>
                
            </GroupComponent>
        </GroupComponent>
    )

}

export default Home