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
            
            <directionalLight position={[0,0,2]} color={"#fff"} intensity={.5} />
            <pointLight position={[-1,0,0]} intensity={5} color={"red"}></pointLight>
            <pointLight position={[1,1,1]} intensity={5} color={"red"}></pointLight>

            <Box
                color='#fff'
                onFrame={(mesh,state,delta)=>{
                    mesh.rotation.y += delta/2
                    mesh.rotation.x += delta/2
                }}
                args={[2,2,2]}
                position={[1,0,1]}
            />
            
        </Canvas>
    </div>
}

export default Background;