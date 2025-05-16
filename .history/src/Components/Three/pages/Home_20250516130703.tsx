import TextComponent from "../UI/Text"



const Home = () =>{

    return (
        <group>
            <directionalLight position={[0,0,2]} color={"#f5f"} intensity={9} />

            <TextComponent
                text="Hello"
                color="#fff"
            />
        </group>
    )

}

export default Home