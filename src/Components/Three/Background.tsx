import { Canvas } from '@react-three/fiber'
import Home from './pages/Home';
import { Suspense, useEffect, useMemo, useRef } from 'react';
import Loader from './pages/Loader';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import GroupComponent from './UI/GroupComponent';
import Listener from './Listener';
import HowIAm from './pages/HowIAm';
import { PerspectiveCamera } from '@react-three/drei';
import Currently from './pages/Currently';
import RocketState from './pages/RocketState';
import MoonState from './pages/MoonState';
import ApplicationHook from '../../hooks/ApplicationHook';
import type { PagesProps } from './Interface';





const Background = () =>{

    const {scrollStep} = ApplicationHook();
    const pagesList: React.FC<PagesProps>[] = [Home, HowIAm, Currently, RocketState, MoonState];

    useEffect(()=>{
        RectAreaLightUniformsLib.init()
    })

    const pages = useMemo(()=>{
        let y = 0;
        return pagesList.map((Component, key) => {
            const c = <Component position={y} key={key} />;
            y -= scrollStep;
            return c;
        });
    },[scrollStep])

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
                    {pages}
                </GroupComponent>
            </Suspense>
        </Canvas>
    )
}

export default Background;