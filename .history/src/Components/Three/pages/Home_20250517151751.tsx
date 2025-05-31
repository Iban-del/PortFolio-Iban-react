import { useEffect, useState } from "react"
import GroupComponent from "../UI/GroupComponent"
import TextComponent from "../UI/Text"


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const Home = () =>{
    const [ready, setReady] = useState(false);
    useEffect(()=>{
         const load = async () => {
        await delay(3000); // 👈 Simule un chargement de 3 secondes
            setReady(true);
            };
            load();
    })

    return (
        <GroupComponent>
            <directionalLight position={[0,0,2]} color={"#17202a"} intensity={15} />
            <TextComponent
                text="Hello World"
                color="#fff"
            />

            <GroupComponent>
                
            </GroupComponent>
        </GroupComponent>
    )

}

export default Home