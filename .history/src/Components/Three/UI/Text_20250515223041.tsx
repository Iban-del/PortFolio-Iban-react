import type React from "react"
import type { DefaultGeometry, MeshEventHandlers, SphereGeometryArgs } from "../Type"
import { useFrame, type Vector3 } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import type { Mesh } from "three";
import { Text } from '@react-three/drei';

interface TextInterface extends MeshEventHandlers, DefaultGeometry{
    text:string,
    scale?:Vector3,
}

const TextComponent: React.FC<TextInterface> = ({
    text,
    scale = [10,10,10],
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
                {text}
                <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
            </Text>
        </mesh>
    )

}

export default TextComponent