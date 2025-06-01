import { MathUtils } from "three";
import Particle from "./Particle";
import GroupComponent from "../UI/GroupComponent";
import type { JSX } from "react";



const ParticleGroup = (
    numberParticle = 120,
    delta = [15,15,15],
    particleSize= 10*Math.pow(10,-2.8)
) =>{
    
    const particles:Array<JSX.Element> = []

    for(let i = 0; i < numberParticle; i++){
        particles.push(<Particle 

            boxArgs={[particleSize,particleSize,0]}
            position={[MathUtils.randFloatSpread(delta[0]),MathUtils.randFloatSpread(delta[1]),MathUtils.randFloatSpread(delta[2])]}
            key={i}
        />)
    }   
    

    return <GroupComponent
        
    >
        {particles}
    </GroupComponent>
}

export default ParticleGroup