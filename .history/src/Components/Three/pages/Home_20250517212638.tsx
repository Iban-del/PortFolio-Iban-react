import ParticleLine from "../Custom/ParticleLine"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"



const Home = () =>{

    return (
        <GroupComponent>
            <directionalLight position={[0,0,2]} color={"#17202a"} intensity={15} />
            <TextComponent
                text="Welcome"
                color="#fff"
                
            />
            <GroupComponent>

            </GroupComponent>
            
            <GroupComponent>
                <ParticleLine position={[2,-1,-1]}/>
                <ParticleLine position={[-3,-1.2,-1.5]}/>
            </GroupComponent>
        </GroupComponent>
    )

}

export default Home