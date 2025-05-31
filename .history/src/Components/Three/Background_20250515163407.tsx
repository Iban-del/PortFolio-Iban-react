import { Canvas } from '@react-three/fiber'
import Box from './UI/Box';
import { Sphere } from 'three';



const Background = () =>{


    return <div className='fixed w-[100%] h-[100%] z-[-1] top-0 '> 
        <Canvas>
            <color attach="background" args={["#101218"]}></color>

            <Sphere></Sphere>
            
        </Canvas>
    </div>
}

export default Background;