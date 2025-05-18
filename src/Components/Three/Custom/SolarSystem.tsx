import { useEffect, useMemo, useRef } from "react"
import MeshComponent from "../UI/MeshComponent"
import Sphere from "../UI/Sphere"
import type { Mesh } from "three"
import Planet from "./Planet"

interface solarSystemInterface {
    position?:[number,number,number],
    size?:[number,number,number],
}

const SolarSystem = ({
    position = [0,0,0],
    size = [1,1,1]
}:solarSystemInterface) =>{

    const systemRef = useRef<Mesh>(null)
    const numberPlanet = 8;
    const maxSize = 6    

    useEffect(()=>{
        if(systemRef.current){
            systemRef.current.rotateX(90)
            systemRef.current.rotateY(30)
        }
    })

    const planets = useMemo(()=>{
        const planetsList = []
        for(let i = 0; i < numberPlanet;i++){
            planetsList.push(<Planet key={i} R={maxSize/i} speed={i/200} intensity={i/100} />)
        }
        return planetsList
    },[])



    return <MeshComponent
        ref={systemRef}
        scale={size}
        position={position}
    >
        <Sphere materialArgs={{emissive:"#fff",emissiveIntensity:1}} sphereArgs={[0.5,32,16,0,Math.PI*2,0,Math.PI]} />
        {planets}


        
    </MeshComponent>
}

export default SolarSystem