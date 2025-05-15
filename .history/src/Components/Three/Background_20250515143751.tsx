import { Canvas } from '@react-three/fiber'



const Background = () =>{

    return <div className='fixed w-[100%] h-[100%] z-[-1] top-0 '> 
        <Canvas>
            <color attach="background" args={["cyan"]}> </color>
            <pointLight position={[10, 10, 10]} />
            <mesh>
                <sphereGeometry />
                <meshStandardMaterial color="hotpink" />
            </mesh>
        </Canvas>
    </div>
}

export default Background;