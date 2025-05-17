import { useEffect, useMemo } from "react"
import ParticleLine from "../Custom/ParticleLine"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"



const Home = () =>{

    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])

    return (
        <GroupComponent>
            <directionalLight position={[0,0,2]} color={"#fff"} intensity={1} />
            <TextComponent
                text="Welcome"
                color="#fff"
                
            />
            {particleGroup}
            <GroupComponent>
                <ParticleLine position={[3,-1,-1]}/>
                <ParticleLine position={[-3,-1.5,-0.5]}/>
            </GroupComponent>
        </GroupComponent>
    )

}

const ParticleGroup = () =>{



    return <>
    
    </>
}

export default Home