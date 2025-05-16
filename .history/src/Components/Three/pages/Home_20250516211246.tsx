import Box from "../UI/Box"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"



const Home = () =>{

    return (
        <GroupComponent>
            <directionalLight position={[0,0,2]} color={"blue"} intensity={1} />
            <TextComponent
                text="Hello World"
                color="#fff"
               
            />

            <GroupComponent>
                <Box
                    color="#fff"
                    position={[1,1,1]}
                    onFrame={(mesh,state,delta)=>{
                        mesh.rotation.x += delta
                        mesh.rotation.z += delta
                    }}
                />
            </GroupComponent>
        </GroupComponent>
    )

}

export default Home