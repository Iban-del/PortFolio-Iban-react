import TextComponent from "../UI/Text"



const Home = () =>{

    return (
        <group>
            <directionalLight position={[0,0,2]} color={"green"} intensity={9} />

            <TextComponent
                text="Hello World"
                color="#141929 "
            />
        </group>
    )

}

export default Home