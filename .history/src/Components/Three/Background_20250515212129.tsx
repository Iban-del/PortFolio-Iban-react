import { Canvas } from '@react-three/fiber'
import Box from './UI/Box';
import Sphere from './UI/Sphere';
import { CatmullRomCurve3, Vector3 } from 'three';
import Tube from './UI/Tube';
import Cone from './UI/Cone';
import Cylinder from './UI/Cylinder';
import Ring from './UI/Ring';
import Torus from './UI/Torus';
import { OrbitControls } from '@react-three/drei'



const Background = () =>{

    const path = new CatmullRomCurve3([
        new Vector3(0, 0, 0),
        new Vector3(2, 2, 2),
        
    ]);

    return <div className='fixed w-[100%] h-[100%] z-[-1] top-0 '> 
        <Canvas>
            <color attach="background" args={["#101218"]}></color>
            <OrbitControls/>
            <directionalLight position={[0,0,2]} color={"blue"} intensity={1} />
            

            <Box
                color='hotpink'
                position={[1,0,0]}
            />
            
        </Canvas>
    </div>
}

export default Background;