import { Canvas } from '@react-three/fiber'
import Home from './pages/Home';
import { Suspense, useEffect, useRef } from 'react';
import Loader from './pages/Loader';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import GroupComponent from './UI/GroupComponent';
import Listener from './Listener';





const Background = () =>{

    useEffect(()=>{
        RectAreaLightUniformsLib.init()
    })

    const listenerRef = useRef<null>(null);

    return(
        <Canvas 
            shadows
        >
            <ambientLight intensity={.1} color={"#fff"}/>
            <color attach="background" args={["#101218"]}></color>
            <Suspense fallback={<Loader/>}>
                <Listener/>
                <GroupComponent responsive={true}>
                    <Home/>
                </GroupComponent>
            </Suspense>
        </Canvas>
    )
}

export default Background;