import { Canvas, useLoader, useThree } from '@react-three/fiber'
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
import { TextureLoader } from 'three';
import HowIAm from './pages/HowIAm';
import Currently from './pages/Currently';
import RocketState from './pages/RocketState';
import MoonState from './pages/MoonState';
import Final from './pages/Final';





const Background = () =>{

    const {scrollValue,updateScroll} = ApplicationHook();
    const {view,helpView} = useApplication()
    const pagesList: React.FC<PagesProps>[] = [Home,HowIAm,Currently,RocketState,MoonState];
    
    const authorizedScroll = (!view && !helpView)

    useEffect(()=>{
        updateScroll("numberScrollELements",pagesList.length-1)
        RectAreaLightUniformsLib.init()
    },[])

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
                <BackgoundScene/>
                {authorizedScroll &&<ScrollListener/>}
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[0,0,10]} color={"#8fffa8a8a"} intensity={.1} />
                    {pages}
                    <GenericThreeUI/>
                </Suspense>
            </GroupComponent>
        </Canvas>
    )
}

const BackgoundScene = () =>{
    const { scene } = useThree();
    const backgroundTexture = useLoader(TextureLoader, '/background.jpg')
    useEffect(()=>{
        //scene.background = backgroundTexture;
    },[])
    return null
}


export default Background;