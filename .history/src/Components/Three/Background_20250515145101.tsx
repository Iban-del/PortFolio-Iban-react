import { Canvas } from '@react-three/fiber'



const Background = () =>{

    return <div className='fixed w-[100%] h-[100%] z-[-1] top-0 '> 
        <Canvas>
            <color attach="background" args={["#101218"]}> </color>
            <pointLight  position={[1, 0.58, 1]} color={'green'} intensity={9}0 />
            <mesh>
                <sphereGeometry />
                <meshStandardMaterial color="hotpink" wireframe vertexColors fog  />
            </mesh>
        </Canvas>
    </div>
}

export default Background;