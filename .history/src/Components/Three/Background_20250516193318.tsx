import { Canvas, useThree } from '@react-three/fiber'
import Box from './UI/Box';
import Sphere from './UI/Sphere';
import { CatmullRomCurve3, Vector3 } from 'three';
import Tube from './UI/Tube';
import Cone from './UI/Cone';
import Cylinder from './UI/Cylinder';
import Ring from './UI/Ring';
import Torus from './UI/Torus';
import Line from './UI/Line';
import TextComponent from './UI/Text';
import { Suspense } from 'react';
import Loder from '../Pages/Loader';
import Home from './pages/Home';





const Background = () =>{

    const path = new CatmullRomCurve3([
        new Vector3(0, 0, 0),
        new Vector3(2, 2, 2),
        
    ]);

    const {size} = useThree()

    console.log()

    return <div className='fixed w-[100%] h-[100%] z-[-1] top-0 '> 
        <Canvas>
            <color attach="background" args={["#101218"]}></color>
            <Home/>
        </Canvas>
    </div>
}

export default Background;