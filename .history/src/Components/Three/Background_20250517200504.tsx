import { Canvas } from '@react-three/fiber'
import Home from './pages/Home';
import ApplicationHook from '../../hooks/ApplicationHook';
import { Suspense, useEffect } from 'react';
import Loader from './pages/Loader';
import { OrbitControls } from '@react-three/drei';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import GroupComponent from './UI/GroupComponent';





const Background = () =>{

    const {scroll} = ApplicationHook()

    useEffect(()=>{
        RectAreaLightUniformsLib.init()
    })

    return(
        <Canvas 
            shadows
        >
            <OrbitControls></OrbitControls>
            <Suspense fallback={<Loader/>}>
                <GroupComponent>
                    <ambientLight intensity={.1} color={"#fff"}/>
                    <color attach="background" args={["#101218"]}></color>
                    <Home/>
                </GroupComponent>
            </Suspense>
        </Canvas>
    )
}

export default Background;