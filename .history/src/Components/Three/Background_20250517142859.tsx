import { Canvas } from '@react-three/fiber'
import Home from './pages/Home';
import ApplicationHook from '../../hooks/ApplicationHook';





const Background = () =>{

    const {state} = ApplicationHook()

    const scroll = () =>{}

    return <div className='fixed w-[100%] h-[100%] z-[-1] top-0 '> 
        <Canvas
            
        >
            <color attach="background" args={["#101218"]}></color>
            <Home/>
        </Canvas>
    </div>
}

export default Background;