import * as THREE from 'three/webgpu'
import * as TSL from 'three/tsl'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'


const Background = () =>{

    return <div className='fixed w-[100%] h-[100%] z-[-1]'> 
        <Canvas
            gl={async (props) => {
            const renderer = new THREE.WebGPURenderer(props as any)
            await renderer.init()
            return renderer
            }}>
            <mesh>
                <meshBasicNodeMaterial />
                <boxGeometry />
            </mesh>
        </Canvas>
    </div>
}

export default Background;