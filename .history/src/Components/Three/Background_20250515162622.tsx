import { Canvas } from '@react-three/fiber'
import Box from './UI/Box';



const Background = () =>{


    return <div className='fixed w-[100%] h-[100%] z-[-1] top-0 '> 
        <Canvas>
            <color attach="background" args={["#101218"]}></color>

            {/** ajout du sol */}
            <Box 
                position={[0,0,0]}
                size={[2,2,2]}
                beforeRender={(mesh)=>{
                    mesh.rotation.x = 10
                }}
                
            />
        </Canvas>
    </div>
}

export default Background;