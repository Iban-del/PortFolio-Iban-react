import { Canvas } from '@react-three/fiber'
import Home from './pages/Home';
import ApplicationHook from '../../hooks/ApplicationHook';





const Background = () =>{

    const {scroll} = ApplicationHook()

    const scrollFalback = () =>{
        console.log("test")
        if(scroll){
            const t = scroll.state+1;
            scroll.setState(t)
            console.log(scroll.state)
        }
    }

    return <div className='fixed w-[100%] h-[100%] z-[1] top-0 '> 
        <Canvas
            
        >
            <color attach="background" args={["#101218"]}></color>
            <Home/>
        </Canvas>
    </div>
}

export default Background;