import { Canvas } from '@react-three/fiber'
import Home from './pages/Home';
import { Suspense, useEffect, useMemo } from 'react';
import Loader from './pages/Loader';
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js';
import GroupComponent from './UI/GroupComponent';
import { PerspectiveCamera } from '@react-three/drei';
import ApplicationHook from '../../hooks/ApplicationHook';
import type { PagesProps } from './Core/Interface';
import ScrollListener from './Scroll/ScrollListener';
import { useApplication } from '../../context/ApplicationContext';
import GenericThreeUI from './Core/GenericThreeUI';





const Background = () =>{

    const {scrollValue} = ApplicationHook();
    const {view} = useApplication()
    const pagesList: React.FC<PagesProps>[] = [Home];

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
            <color attach="background" args={["#000000"]}></color>
            <GroupComponent responsive={true}>
                <PerspectiveCamera makeDefault position={[0,0,10]} far={40} />
                {!view&&<ScrollListener/>}
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[0,0,10]} color={"#8fffa8a8a"} intensity={1} />
                    {pages}
                    <GenericThreeUI/>
                </Suspense>
            </GroupComponent>
        </Canvas>
    )
}

export default Background;