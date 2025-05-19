import { Canvas } from '@react-three/fiber'
import Home from './pages/Home';
import { Suspense, useEffect, useRef } from 'react';
import Loader from './pages/Loader';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import GroupComponent from './UI/GroupComponent';
import Listener from './Listener';
import HowIAm from './pages/HowIAm';
import { PerspectiveCamera } from '@react-three/drei';
import Currently from './pages/Currently';
import CurrentlyScoll from './pages/CurrentlyScoll';





const Background = () =>{

    useEffect(()=>{
        RectAreaLightUniformsLib.init()
    })

    return(
        <Canvas 
            shadows
        >
            <ambientLight intensity={.1} color={"#fff"}/>
            <color attach="background" args={["#101218"]}></color>
            <Suspense fallback={<Loader/>}>
                <GroupComponent responsive={true}>
                    <directionalLight position={[0,0,10]} color={"#bbbbbb"} intensity={1} />
                    <PerspectiveCamera makeDefault position={[0,0,10]} />
                    <Listener/>
                    <Home/>
                    <HowIAm/>
                    <Currently/>
                    <CurrentlyScoll/>
                </GroupComponent>
            </Suspense>
        </Canvas>
    )
}

export default Background;