import { useEffect, useMemo, type JSX } from "react"
import ParticleLine from "../Custom/ParticleLine"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import { MathUtils } from "three"
import Particle from "../Custom/Particle"



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
    
    const numberParticle = 90;
    const particles:Array<JSX.Element> = []
    const n = 3

    for(let i = 0; i < numberParticle; i++){
        particles.push(<Particle 
            position={[MathUtils.randFloatSpread(n),MathUtils.randFloatSpread(n),MathUtils.randFloatSpread(n)]}
        />)
    }   
    

    return <GroupComponent>
        {particles}
    </GroupComponent>
}

export default Home