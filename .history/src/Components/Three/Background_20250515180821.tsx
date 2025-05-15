import { Canvas } from '@react-three/fiber'
import Box from './UI/Box';
import Sphere from './UI/Sphere';



const Background = () =>{

    const path = new CatmullRomCurve3([
        new Vector3(-10, 0, 10),
        new Vector3(-5, 5, 5),
        new Vector3(0, 0, 0),
        new Vector3(5, -5, 5),
        new Vector3(10, 0, 10),
    ]);

    return <div className='fixed w-[100%] h-[100%] z-[-1] top-0 '> 
        <Canvas>
            <color attach="background" args={["#101218"]}></color>

            <Sphere 
                color='red'
                args={[]}
            />
            
        </Canvas>
    </div>
}

export default Background;