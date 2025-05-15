import type React from "react"
import type { DefaultGeometry, MeshEventHandlers, SphereGeometryArgs } from "../Type"
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Mesh } from "three";
import { Text } from '@react-three/drei';

interface TextInterface extends MeshEventHandlers, DefaultGeometry{
    text:string,
    scale?:number[],
}

const TextComponent: React.FC<TextInterface> = ({
    text,
    scale = [1,1,1],
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

            <Text
                scale={scale}
            >

            </Text>
            <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
        </mesh>
    )

}

export default TextComponent