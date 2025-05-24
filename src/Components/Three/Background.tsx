import { Canvas, useThree } from '@react-three/fiber'
import Home from './pages/Home';
import { Suspense, useEffect, useMemo, useRef } from 'react';
import Loader from './pages/Loader';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import GroupComponent from './UI/GroupComponent';
import Listener from './ScrollListener';
import HowIAm from './pages/HowIAm';
import { PerspectiveCamera } from '@react-three/drei';
import Currently from './pages/Currently';
import RocketState from './pages/RocketState';
import MoonState from './pages/MoonState';
import ApplicationHook from '../../hooks/ApplicationHook';
import type { PagesProps } from './Interface';
import CameraScroll from './CameraScroll';
import Final from './pages/Final';
import { topDown } from './Annimation';





const Background = () =>{

    const {scrollValue} = ApplicationHook();
    const pagesList: React.FC<PagesProps>[] = [Home, HowIAm, Currently, RocketState, MoonState,Final];

    useEffect(()=>{
        RectAreaLightUniformsLib.init()
    })

    const pages = useMemo(()=>{
        let y = 0;
        let x = 1;
        return pagesList.map((Component, key) => {
            const c = <Component scrollState={x-1} position={y} key={key} />;
            y -= scrollValue.scrollStep;
            x += 1;
            return c;
        });
    },[scrollValue.scrollStep])

    return(
        <Canvas 
            shadows
        >
            <ambientLight intensity={.1} color={"#fff"}/>
            <color attach="background" args={["#101218"]}></color>
            <GroupComponent responsive={true}>
                <PerspectiveCamera makeDefault position={[0,0,10]} far={40} />
                
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[0,0,10]} color={"#bbbbbb"} intensity={1} />
                    {pages}
                </Suspense>
            </GroupComponent>
        </Canvas>
    )
}

export default Background;