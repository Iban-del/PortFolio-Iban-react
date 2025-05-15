import { Canvas } from '@react-three/fiber'
import Box from './UI/Box';



const Background = () =>{


    return <div className='fixed w-[100%] h-[100%]  top-0 '> 
        <Canvas>
            <color attach="background" args={["#101218"]}></color>


            {/** ajout du sol */}
            <Box
                size={[2, 2, 2]}
                color="red"
                onClick={(e) => console.log("clicked")}
                onPointerDown={(e) => console.log("pointer down")}
                onFrame={(mesh, state, delta) => {
                    mesh.rotation.y += delta;
                }}
                />
        </Canvas>
    </div>
}

export default Background;