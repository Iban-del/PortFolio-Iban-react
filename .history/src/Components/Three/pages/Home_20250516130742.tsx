import TextComponent from "../UI/Text"



const Home = () =>{

    return (
        <group>
            <directionalLight position={[0,0,2]} color={"red"} intensity={9} />

            <TextComponent
                text="Hello World"
                color="#fff"
            />
        </group>
    )

}

export default Home