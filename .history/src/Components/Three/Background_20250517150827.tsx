import { Canvas } from '@react-three/fiber'
import Home from './pages/Home';
import ApplicationHook from '../../hooks/ApplicationHook';
import { Suspense } from 'react';
import Loader from './pages/Loader';






const Background = () =>{

    const {scroll} = ApplicationHook()

    return <div className='fixed w-[100%] h-[100%] z-[-1] top-0 '>   
    <Suspense fallback={<Loader/>}>
        <Canvas
        >
          
                <color attach="background" args={["#101218"]}></color>
                <Home/>
            
        </Canvas>
    </Suspense>
    </div>
}

export default Background;