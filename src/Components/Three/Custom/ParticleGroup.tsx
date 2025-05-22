import { MathUtils } from "three";
import Particle from "./Particle";
import GroupComponent from "../UI/GroupComponent";
import type { JSX } from "react";
import { topDown } from "../Annimation";



const ParticleGroup = (
    numberParticle = 120,
    delta = 15,
    particleSize= 10*Math.pow(10,-2.7)
) =>{
    
    const particles:Array<JSX.Element> = []

    for(let i = 0; i < numberParticle; i++){
        particles.push(<Particle 
            boxArgs={[particleSize,particleSize,0]}
            position={[MathUtils.randFloatSpread(delta),MathUtils.randFloatSpread(delta),MathUtils.randFloatSpread(delta)]}
            key={i}
        />)
    }   
    

    return <GroupComponent
        beforeRender={(group)=>{
            //topDown({component:group,delta:0.1,ease:"power1.inOut",duration:1})
        }}
    >
        {particles}
    </GroupComponent>
}

export default ParticleGroup