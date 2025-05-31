import { Canvas } from '@react-three/fiber'
import Home from './pages/Home';
import ApplicationHook from '../../hooks/ApplicationHook';
import { Suspense } from 'react';
import Loader from './pages/Loader';
import { PerspectiveCamera } from '@react-three/drei';






const Background = () =>{

    const {scroll} = ApplicationHook()

    return(
        <Canvas>
            <Suspense fallback={<Loader/>}>
                <PerspectiveCamera makeDefault position={[0,0,10]} fov={90}></PerspectiveCamera>
                <color attach="background" args={["#101218"]}></color>
                <Home/>
            </Suspense>
        </Canvas>
    )
}

export default Background;