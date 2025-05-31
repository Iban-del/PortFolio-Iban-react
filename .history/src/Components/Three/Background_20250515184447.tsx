import { Canvas } from '@react-three/fiber'
import Box from './UI/Box';
import Sphere from './UI/Sphere';
import { CatmullRomCurve3, Vector3 } from 'three';
import Tube from './UI/Tube';
import Cone from './UI/Cone';
import Cylinder from './UI/Cylinder';
import Ring from './UI/Ring';
import Torus from './UI/Torus';



const Background = () =>{

    const path = new CatmullRomCurve3([
        new Vector3(0, 0, 0),
        new Vector3(2, 2, 2),
        
    ]);

    return <div className='fixed w-[100%] h-[100%] z-[-1] top-0 '> 
        <Canvas>
            <color attach="background" args={["#101218"]}></color>

            <Torus
                color='red'
                onFrame={(mesh,state,delta)=>{

                }}
            />
            
        </Canvas>
    </div>
}

export default Background;