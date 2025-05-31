import TextComponent from "../UI/Text"



const Home = () =>{

    return (
        <group>
            <directionalLight position={[0,0,2]} color={"#f5f"} intensity={90} />

            <TextComponent
                text="Hello"
            />
        </group>
    )

}

export default Home