import { Canvas } from '@react-three/fiber'
import Home from './pages/Home';
import ApplicationHook from '../../hooks/ApplicationHook';
import { Suspense } from 'react';





const Background = () =>{

    const {scroll} = ApplicationHook()

    return <div className='fixed w-[100%] h-[100%] z-[-1] top-0 '> 
        <Canvas
        >
            <Suspense>
                <color attach="background" args={["#101218"]}></color>
            <Home/>
            </Suspense>
                
        </Canvas>
    </div>
}

export default Background;