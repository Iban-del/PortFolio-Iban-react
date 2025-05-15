import { Canvas } from '@react-three/fiber'
import Box from './UI/Box';



const Background = () =>{


    return <div className='fixed w-[100%] h-[100%]  top-0 '> 
        <Canvas>
            <color attach="background" args={["#101218"]}></color>


            {/** ajout du sol */}
            <Box color='red' onFrame={()=>console.log('e')} size={[1,2,3]} onClick={()=>console.log("test")}></Box>
        </Canvas>
    </div>
}

export default Background;