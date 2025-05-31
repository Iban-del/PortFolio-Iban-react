import { Canvas } from '@react-three/fiber'



const Background = () =>{

    return <div className='fixed w-[100%] h-[100%] z-[-1]  '> 
        <Canvas>
        <pointLight position={[0, 0, 0]} />
        <mesh>
        <sphereGeometry />
        <meshStandardMaterial color="hotpink" />
        </mesh>
        </Canvas>
    </div>
}

export default Background;