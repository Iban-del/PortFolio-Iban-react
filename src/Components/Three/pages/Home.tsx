import { useMemo } from "react"
import ParticleLine from "../Custom/ParticleLine"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"
import { topDown } from "../Annimation"
import ParticleGroup from "../Custom/ParticleGroup"
import Primitive from "../UI/Primitive"
import type { PagesProps } from "../Interface"
import TextCard from "../UI/TextCard"


const Home  = ({
    position = 0
}:PagesProps) =>{

    const particleGroup = useMemo(()=>{
        return ParticleGroup()
    },[])



    return (
        <GroupComponent
    
            position={[0,position,0]}
        >
            

            <TextCard
                content="Actuellement âgé de 17 ans, je suis élève au lycée Charles Tillon, où je poursuis une formation en Systèmes Numériques avec une spécialisation en RISC (Réseaux Informatiques et Systèmes Communicants). Passionné par le développement informatique, je souhaite approfondir mes connaissances et poursuivre mes études dans ce domaine afin de devenir développeur en intelligence artificielle et l'analyse de données."
            />
        

            {particleGroup}
            <GroupComponent>
                <ParticleLine position={[4,-4,-3]}/>
                <ParticleLine position={[-4,-6,-4]}/>
            </GroupComponent>

            {/* <Primitive  scale={0.1} position={[0,0,9]} link="/Astronaut/scene.gltf"></Primitive> */}
                
        </GroupComponent>
    )

}



export default Home