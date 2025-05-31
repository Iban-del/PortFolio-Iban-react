import { Canvas } from '@react-three/fiber'
import Home from './pages/Home';
import ApplicationHook from '../../hooks/ApplicationHook';
import { Suspense } from 'react';
import Loader from './pages/Loader';







const Background = () =>{

    const {scroll} = ApplicationHook()

    return(
        <Canvas 
            shadows
        >
            <Suspense fallback={<Loader/>}>
                <ambientLight intensity={1} color={"#fff"}/>
                <color attach="background" args={["#101218"]}></color>
                <Home/>
            </Suspense>
        </Canvas>
    )
}

export default Background;