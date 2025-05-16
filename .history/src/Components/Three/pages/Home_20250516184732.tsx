import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"



const Home = () =>{


    return (
        <GroupComponent
            onFrame={(group,state,delta)=>{
                console.log(group,state,delta)
            }}
        >
            <directionalLight position={[0,0,2]} color={"#fff"} intensity={9} />

            <TextComponent
                text="Hello World"
                color="#fff"
            />
        </GroupComponent>
    )

}

export default Home