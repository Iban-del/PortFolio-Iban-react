import { useEffect, useMemo } from "react"
import ParticleLine from "../Custom/ParticleLine"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import { MathUtils } from "three"


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
    const particles = MathUtils.randFloatSpread(2*2)
    console.log(particles)
    

    return <GroupComponent>
        
    </GroupComponent>
}

export default Home