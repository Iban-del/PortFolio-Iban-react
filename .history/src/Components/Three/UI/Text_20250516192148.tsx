import type React from "react"
import type { DefaultGeometry, MeshEventHandlers } from "../Type"
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
    scale = [1,1,1],
    color = 'black',
    position = [0,0,0],
    metalness = 0.9,
    roughness = 0.5,
    ...propsEvent
}) => {

    const refMesh = useRef<Mesh|null>(null);
    

    return (
        <mesh
            position={position}
            {...propsEvent}
            ref={refMesh}
        >
            <Text scale={scale}>
                {text}
                <meshStandardMaterial  color={color} metalness={metalness} roughness={roughness} ></meshStandardMaterial>
            </Text>
        </mesh>
    )

}

export default TextComponent