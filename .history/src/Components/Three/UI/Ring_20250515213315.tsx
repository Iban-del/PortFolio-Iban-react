import type React from "react"
import type { DefaultGeometry, MeshEventHandlers, RingGeometryArgs } from "../Type"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Mesh } from "three";


interface RingInterface extends MeshEventHandlers, DefaultGeometry{
    args?:RingGeometryArgs
}

const Ring: React.FC<RingInterface> = ({
    args = [],
    color = 'black',
    position = [0,0,0],
    onFrame,
    beforeRender,
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) => {

    const refMesh = useRef<Mesh|null>(null);
    
    useFrame((state, delta) => {
        if(refMesh.current){
            onFrame && onFrame(refMesh.current,state,delta)
        }
    })

    useEffect(()=>{
        if(refMesh.current){
            beforeRender && beforeRender(refMesh.current)
        }
    })

    return (
        <mesh
            position={position}
            {...propsEvent}
            ref={refMesh}
        >
            
            <ringGeometry args={args} ></ringGeometry>
            <meshStandardMaterial color={color} ></meshStandardMaterial>
        </mesh>
    )

}

export default Ring